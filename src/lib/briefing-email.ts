import { contact } from "@/lib/contact";

export const SITE = "https://www.credence.africa";

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** The Credence wrapper around a briefing. `body` is HTML written by a signed-in admin in the editor. */
export function briefingHtml({ subject, body, unsubscribeUrl }: { subject: string; body: string; unsubscribeUrl: string }) {
  const link = "color:#BDBDBD;text-decoration:underline";
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#FAFAF9">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF9"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border:1px solid #E7E5E2">
<tr><td style="background:#0A0A0A;padding:24px 32px"><img src="${SITE}/logo-light.png" width="221" height="24" alt="Credence Africa" style="display:block;border:0"></td></tr>
<tr><td style="padding:32px;font-family:${font};font-size:16px;line-height:1.6;color:#3F3F46">
<p style="margin:0 0 20px;font-size:13px;font-weight:600;color:#C42D0A">Credence Intelligence Briefings</p>
${body}
</td></tr>
<tr><td style="background:#0A0A0A;padding:24px 32px;font-family:${font};font-size:12px;line-height:1.6;color:#BDBDBD">
You are receiving this because you registered for Credence Intelligence briefings.<br>
<a href="${unsubscribeUrl}" style="${link}">Unsubscribe</a> &nbsp;|&nbsp; <a href="${SITE}/privacy-policy" style="${link}">Privacy Policy</a><br>
Credence Africa, ${escapeHtml(contact.address)}
</td></tr>
</table>
</td></tr></table>
</body>
</html>`;
}

/** The plain-text part of the same email. */
export function briefingText(body: string, unsubscribeUrl: string) {
  const text = body
    .replace(/<\/(p|h[1-6]|li|blockquote)>|<br\s*\/?>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return `${text}\n\n--\nCredence Africa, ${contact.address}\nUnsubscribe: ${unsubscribeUrl}\nPrivacy Policy: ${SITE}/privacy-policy\n`;
}
