import { useState } from 'react';
import SEO from '../components/SEO';
import { SITE, ROUTES, emailHref } from '../content/site';

export default function Contacts() {
  const [showMap, setShowMap] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', privacy: false });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.privacy) return;
    setStatus('success');
  };

  return (
    <>
      <SEO
        title="Контакти | Дружество „Знание“, Хасково"
        description="Свържете се с Дружество „Знание“: телефон 0878 398 920, имейл и адрес в Хасково. Въпроси за семинари, групово участие и фактури."
        pathname={ROUTES.KONTAKTI}
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>Контакти</h1>
          </div>
          <p className="measure">
            Пишете или се обадете за семинарите, груповото участие и фактурите. Отговаряме в рамките на
            един работен ден.
          </p>

          <ul className="list" style={{ marginTop: 24 }}>
            <li>
              <strong>Телефон:</strong>{' '}
              <a href={SITE.PHONE_HREF}>{SITE.PHONE}</a>
            </li>
            {SITE.EMAIL && (
              <li>
                <strong>Имейл:</strong>{' '}
                <a href={emailHref()}>{SITE.EMAIL}</a>
              </li>
            )}
            <li>
              <strong>Адрес:</strong> {SITE.ADDRESS}
            </li>
          </ul>

          <h2 style={{ marginTop: 48 }}>Изпратете ни съобщение</h2>
          {status === 'success' ? (
            <p className="form-success">Благодарим. Ще Ви отговорим до един работен ден.</p>
          ) : (
            <form className="registration-form" style={{ marginTop: 20 }} onSubmit={handleSubmit}>
              <div className="field">
                <label>Име</label>
                <input className="input" type="text" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Имейл</label>
                <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Телефон (по желание)</label>
                <input className="input" type="tel" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Съобщение</label>
                <textarea className="input" name="message" rows="5" value={form.message} onChange={handleChange} required />
              </div>
              <label className="check">
                <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} required />
                <span>
                  Прочетох <a href={ROUTES.PRIVACY}>Политиката за поверителност</a>
                </span>
              </label>
              <button type="submit" className="btn btn--primary" style={{ marginTop: 16 }}>
                Изпратете съобщението
              </button>
            </form>
          )}

          <h2 style={{ marginTop: 48 }}>Карта</h2>
          {!showMap ? (
            <button type="button" className="btn btn--ghost" onClick={() => setShowMap(true)}>
              Покажи картата
            </button>
          ) : (
            <div
              className="map"
              dangerouslySetInnerHTML={{
                __html: `<iframe
                  src="https://www.google.com/maps?q=${encodeURIComponent(SITE.ADDRESS)}&output=embed"
                  width="100%"
                  height="300"
                  style="border:0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Карта на адреса"
                ></iframe>`,
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
