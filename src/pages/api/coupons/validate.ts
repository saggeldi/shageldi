import type { APIRoute } from 'astro';
import { callCouponApi, json, publicResult } from '../../../lib/coupons';

// On-demand (server) route — keeps COUPON_API_KEY off the client.
export const prerender = false;

const MAX_CODE_LENGTH = 64;

export const GET: APIRoute = async ({ url }) => {
  const code = (url.searchParams.get('code') ?? '').trim();

  if (!code) {
    return json({ error: 'Enter a coupon code.' }, 400);
  }
  if (code.length > MAX_CODE_LENGTH) {
    return json({ valid: false, status: 'not_found', message: 'Invalid code.' }, 200);
  }

  const res = await callCouponApi(`/coupons/validate?code=${encodeURIComponent(code)}`, {
    method: 'GET',
  });

  if (!res.ok) return json({ error: res.error }, res.status);

  return json(publicResult(res.data), 200);
};
