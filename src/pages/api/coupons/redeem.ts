import type { APIRoute } from 'astro';
import { callCouponApi, json, publicResult } from '../../../lib/coupons';

// On-demand (server) route — keeps COUPON_API_KEY off the client.
export const prerender = false;

const MAX_CODE_LENGTH = 64;
const MAX_ORDER_ID_LENGTH = 64;

export const POST: APIRoute = async ({ request }) => {
  let body: { code?: unknown; order_id?: unknown; order_value?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const code = typeof body.code === 'string' ? body.code.trim() : '';
  const orderId = typeof body.order_id === 'string' ? body.order_id.trim() : '';
  const orderValue = Number(body.order_value);

  if (!code || code.length > MAX_CODE_LENGTH) {
    return json({ error: 'A coupon code is required.' }, 400);
  }
  if (!orderId || orderId.length > MAX_ORDER_ID_LENGTH) {
    return json({ error: 'An order id is required.' }, 400);
  }
  if (!Number.isFinite(orderValue) || orderValue < 0) {
    return json({ error: 'A valid order value is required.' }, 400);
  }

  const res = await callCouponApi('/coupons/redeem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      code,
      order_id: orderId,
      // Money is settled server-side; round to cents so the ledger stays clean.
      order_value: Math.round(orderValue * 100) / 100,
    }),
  });

  if (!res.ok) return json({ error: res.error }, res.status);

  return json({ ...publicResult(res.data), assignment_id: res.data.assignment_id }, 200);
};
