/**
 * Server-side helpers for the Jule.ai coupon API.
 *
 * The coupon secret key must never reach the browser, so everything here is
 * only ever imported from on-demand (`prerender = false`) API routes, which
 * proxy the browser's requests and add the Authorization header themselves.
 */

// The docs print `/api/v1/api/v1`, but that 404s — the live base is a single `/api/v1`.
const DEFAULT_BASE = 'https://api.jule.ai/api/v1';

export const COUPON_API_BASE = process.env.COUPON_API_BASE || DEFAULT_BASE;

/**
 * Read at call time from `process.env` only. Writing `import.meta.env.COUPON_API_KEY`
 * would let Vite inline the secret as a string literal into the built server bundle;
 * this way the key is looked up from the runtime environment (Vercel project env vars)
 * and rotating it doesn't need a rebuild.
 */
export function couponApiKey(): string | undefined {
  return process.env.COUPON_API_KEY;
}

/** Statuses the API can return, all with HTTP 200. */
export type CouponStatus =
  | 'valid'
  | 'not_found'
  | 'already_redeemed'
  | 'expired'
  | 'invalid_coupon';

export interface CouponResult {
  valid: boolean;
  status?: CouponStatus;
  code?: string;
  // Upstream sends `discount_label: null` and `discount_value` as a string ("15.00").
  discount_label?: string | null;
  discount_type?: 'percentage' | 'fixed' | string;
  discount_value?: number | string;
  assigned_to?: string;
  assigned_to_type?: 'email' | 'phone' | 'session';
  assignment_id?: string;
  message?: string;
}

/** Customer-facing copy per status, so the client never invents its own. */
export const STATUS_MESSAGE: Record<CouponStatus, string> = {
  valid: 'Coupon applied.',
  not_found: 'Invalid code — check the spelling and try again.',
  already_redeemed: 'This code has already been used.',
  expired: 'This code has expired.',
  invalid_coupon: 'This code is not available right now.',
};

export function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

/**
 * Calls the coupon API and normalises the reply. Upstream answers with 200 for
 * every business outcome; anything else is treated as a transport failure.
 */
export async function callCouponApi(
  path: string,
  init: RequestInit = {},
): Promise<{ ok: true; data: CouponResult } | { ok: false; status: number; error: string }> {
  const key = couponApiKey();
  if (!key) {
    return { ok: false, status: 500, error: 'Coupons are not configured.' };
  }

  let res: Response;
  try {
    res = await fetch(`${COUPON_API_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
        ...(init.headers ?? {}),
      },
    });
  } catch (err) {
    console.error('Coupon API unreachable:', err);
    return { ok: false, status: 502, error: 'Could not reach the coupon service.' };
  }

  let data: CouponResult;
  try {
    data = (await res.json()) as CouponResult;
  } catch {
    console.error('Coupon API returned a non-JSON body', res.status);
    return { ok: false, status: 502, error: 'Unexpected response from the coupon service.' };
  }

  if (!res.ok) {
    console.error('Coupon API error', res.status, data);
    return {
      ok: false,
      status: res.status === 401 || res.status === 403 ? 500 : 502,
      error: data?.message ?? 'The coupon service rejected the request.',
    };
  }

  return { ok: true, data };
}

/** Builds the "15% off" / "$20 off" caption upstream leaves null. */
function fallbackLabel(type: string | undefined, value: number): string | undefined {
  if (!Number.isFinite(value) || value <= 0) return undefined;
  const trimmed = Number.isInteger(value) ? String(value) : value.toFixed(2);
  return type === 'percentage' ? `${trimmed}% off` : `$${trimmed} off`;
}

/** Strips the reply down to what the browser is allowed to see. */
export function publicResult(data: CouponResult) {
  const status = (data.status ?? (data.valid ? 'valid' : 'not_found')) as CouponStatus;
  const value = Number(data.discount_value);

  return {
    valid: Boolean(data.valid),
    status,
    code: data.code,
    discount_label: data.discount_label ?? fallbackLabel(data.discount_type, value),
    discount_type: data.discount_type,
    discount_value: Number.isFinite(value) ? value : 0,
    assigned_to: data.assigned_to,
    assigned_to_type: data.assigned_to_type,
    message: data.message ?? STATUS_MESSAGE[status] ?? 'Unable to use this code.',
  };
}
