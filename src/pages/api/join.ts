import type { APIRoute } from 'astro';
import { validate, labels, type JoinFields } from '../../lib/join-form';

export const prerender = false;

/**
 * Emails a Join submission to the team via Resend (https://resend.com).
 * Vercel environment variables:
 *   RESEND_API_KEY    – the Resend API key (secret)
 *   JOIN_TO_EMAIL     – who receives submissions, e.g. hello@toteallysisters.org
 *   JOIN_FROM_EMAIL   – a sender on a domain verified in Resend, e.g. "Toteally Sisters <join@toteallysisters.org>"
 *
 * Test mode: if the submitter's email is one of Resend's test inboxes (e.g. delivered@resend.dev),
 * the notification goes to that test inbox instead of JOIN_TO_EMAIL. This checks the whole setup
 * (key, sender, Resend) without emailing the team. https://resend.com/docs/dashboard/emails/send-test-emails
 */
const TEST_INBOX = /^(delivered|bounced|complained)(\+[a-z0-9-]+)?@resend\.dev$/i;
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

export const POST: APIRoute = async ({ request, redirect }) => {
  let input: Record<string, unknown>;
  const ct = request.headers.get('content-type') ?? '';
  // A plain form post (no JavaScript) gets a page back instead of JSON.
  const html = !ct.includes('application/json');
  const reply = (body: { ok: boolean; [k: string]: unknown }, status = 200) =>
    html ? redirect(body.ok ? '/get-involved/thanks/' : '/get-involved/sorry/', 303) : json(body, status);
  try {
    input = ct.includes('application/json') ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    return reply({ ok: false, error: 'bad_request' }, 400);
  }

  // Spam checks: a hidden field people never see, and a minimum time on the page.
  const started = Number(input.started);
  if (input.website || (Number.isFinite(started) && Date.now() - started < 3000)) {
    return reply({ ok: true }); // pretend success to bots
  }

  const { data, errors, ok } = validate(input);
  if (!ok) return reply({ ok: false, error: 'invalid', errors }, 422);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.JOIN_TO_EMAIL;
  const from = process.env.JOIN_FROM_EMAIL ?? 'Toteally Sisters <onboarding@resend.dev>';
  if (!key || !to) return reply({ ok: false, error: 'not_configured' }, 503);
  const test = TEST_INBOX.test(data.email);
  const recipients = test ? [data.email] : to.split(',').map((s: string) => s.trim());

  const rows = (Object.keys(labels) as (keyof JoinFields)[])
    .map((k) => `<tr><th align="left" valign="top" style="padding:6px 16px 6px 0;font-family:sans-serif">${esc(labels[k])}</th><td style="padding:6px 0;font-family:sans-serif;white-space:pre-wrap">${esc(data[k] || '—')}</td></tr>`)
    .join('');
  const text = (Object.keys(labels) as (keyof JoinFields)[]).map((k) => `${labels[k]}: ${data[k] || '—'}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: data.email,
      subject: `${test ? '[TEST] ' : ''}New sister: ${data.firstName} ${data.lastName}`,
      html: `<p style="font-family:sans-serif">Someone just filled out the Join form. Reply to this email to write back to them.</p><table>${rows}</table>`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('Resend send failed', res.status, detail.slice(0, 500));
    // Only test submissions get Resend's error back, to help with setup.
    return reply({ ok: false, error: 'send_failed', ...(test ? { status: res.status, detail: detail.slice(0, 500) } : {}) }, 502);
  }
  const sent = await res.json().catch(() => ({}));
  return reply({ ok: true, ...(test ? { test: true, id: sent.id, sentTo: recipients, from } : {}) });
};
