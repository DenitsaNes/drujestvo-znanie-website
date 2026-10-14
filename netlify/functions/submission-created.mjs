import { SITE } from '../../src/content/site.js';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

function getField(payload, name) {
  const value = payload?.data?.[name];
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

function fmtPrice(amount) {
  const n = Number(amount);
  return Number.isFinite(n) ? `${n} €` : amount;
}

export default async (request) => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    console.log('BREVO_API_KEY or BREVO_SENDER_EMAIL not set; skipping email.');
    return new Response('OK', { status: 200 });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    console.log('Could not parse request body:', err.message);
    return new Response('OK', { status: 200 });
  }

  // Netlify form event payloads are wrapped in a `payload` object.
  const payload = body?.payload || body || {};
  const formName = payload?.form_name || payload?.formName || '';

  if (formName !== 'registration') {
    console.log(`Form ${formName} submitted; no auto-reply needed.`);
    return new Response('OK', { status: 200 });
  }

  const name = getField(payload, 'name');
  const email = getField(payload, 'email');
  const total = getField(payload, 'totalPrice');
  const perPerson = getField(payload, 'pricePerPerson');

  if (!email) {
    console.log('No registrant email found; skipping email.');
    return new Response('OK', { status: 200 });
  }

  const subject = `Потвърждение на записването — ${SITE.ORG}`;
  const reason = `Семинар 28.10 — ${name || 'участник'}`;

  const text = [
    `Здравейте, ${name || ''}`,
    '',
    `Благодарим за записването за семинара „${SITE.SEM1_TITLE}“.`,
    `Дата: ${SITE.SEM1_DATE_SHORT}, ${SITE.SEM1_TIME} ч., ${SITE.SEM1_ZOOM}.`,
    '',
    'Данни за плащане по банков път:',
    `Получател: ${SITE.ORG}`,
    `IBAN: ${SITE.BANK_IBAN}`,
    `BIC/SWIFT: ${SITE.BANK_BIC}`,
    `Сума: ${fmtPrice(total || perPerson || SITE.EARLY_PRICE || SITE.PRICE)}`,
    `Основание: ${reason}`,
    '',
    'Мястото Ви е потвърдено, когато плащането постъпи.',
    '',
    'Ако имате въпроси, свържете се с нас.',
    `${SITE.ORG}`,
  ].join('\n');

  const html = [
    `<p>Здравейте, ${escapeHtml(name || '')},</p>`,
    `<p>Благодарим за записването за семинара „${escapeHtml(SITE.SEM1_TITLE)}“.</p>`,
    `<p><strong>Дата:</strong> ${escapeHtml(SITE.SEM1_DATE_SHORT)}, ${escapeHtml(
      SITE.SEM1_TIME
    )} ч., ${escapeHtml(SITE.SEM1_ZOOM)}.</p>`,
    '<h3>Данни за плащане по банков път</h3>',
    '<ul>',
    `<li><strong>Получател:</strong> ${escapeHtml(SITE.ORG)}</li>`,
    `<li><strong>IBAN:</strong> ${escapeHtml(SITE.BANK_IBAN)}</li>`,
    `<li><strong>BIC/SWIFT:</strong> ${escapeHtml(SITE.BANK_BIC)}</li>`,
    `<li><strong>Сума:</strong> ${escapeHtml(
      fmtPrice(total || perPerson || SITE.EARLY_PRICE || SITE.PRICE)
    )}</li>`,
    `<li><strong>Основание:</strong> ${escapeHtml(reason)}</li>`,
    '</ul>',
    '<p><strong>Важно:</strong> Мястото Ви е потвърдено, когато плащането постъпи.</p>',
    `<p>Ако имате въпроси, свържете се с нас.</p>`,
    `<p>${escapeHtml(SITE.ORG)}</p>`,
  ].join('\n');

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: SITE.ORG, email: senderEmail },
        to: [{ email }],
        subject,
        htmlContent: html,
        textContent: text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.log('Brevo API error:', response.status, body);
    } else {
      console.log('Confirmation email sent to', email);
    }
  } catch (err) {
    console.log('Error sending email:', err.message);
  }

  return new Response('OK', { status: 200 });
};

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
