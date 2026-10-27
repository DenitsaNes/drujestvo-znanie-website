const HUBSPOT_UPSERT_URL = 'https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert';

function getField(payload, name) {
  const value = payload?.data?.[name];
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

function splitName(full) {
  const parts = String(full || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first: '', last: '' };
  if (parts.length === 1) return { first: parts[0], last: '' };
  return { first: parts[0], last: parts.slice(1).join(' ') };
}

function mapFormToHubSpot(formName, payload) {
  const email = getField(payload, 'email');
  if (!email) return null;

  const name = splitName(getField(payload, 'name'));
  const course = getField(payload, 'course');

  const props = {
    email,
    firstname: name.first,
    lastname: name.last,
    phone: getField(payload, 'phone'),
    company: getField(payload, 'invoiceCompany') || getField(payload, 'company'),
    crm_source: 'Website',
  };

  if (formName === 'registration') {
    props.lifecyclestage = 'marketingqualifiedlead';
    props.crm_status = 'Signed up';
    if (course) props.crm_seminars = course;
  } else {
    props.lifecyclestage = '6313258222';
    props.crm_status = 'New';
  }

  // Drop empty values so we don't overwrite existing HubSpot data.
  Object.keys(props).forEach((key) => {
    if (props[key] === '') delete props[key];
  });

  return { email, props };
}

async function pushToHubSpot(formName, payload) {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.log('HUBSPOT_TOKEN not set; skipping HubSpot.');
    return;
  }

  const mapped = mapFormToHubSpot(formName, payload);
  if (!mapped) {
    console.log('No email in submission; skipping HubSpot.');
    return;
  }

  const body = {
    inputs: [
      {
        idProperty: 'email',
        id: mapped.email,
        properties: mapped.props,
      },
    ],
  };

  try {
    const res = await fetch(HUBSPOT_UPSERT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log('HubSpot error:', res.status, text);
    } else {
      const json = await res.json().catch(() => null);
      console.log('HubSpot contact upserted:', mapped.email, json?.results?.length || 1);
    }
  } catch (err) {
    console.log('HubSpot request failed:', err.message);
  }
}

export default async (request) => {
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

  if (!formName) {
    console.log('No form name in submission; skipping.');
    return new Response('OK', { status: 200 });
  }

  await pushToHubSpot(formName, payload);

  return new Response('OK', { status: 200 });
};
