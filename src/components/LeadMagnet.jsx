import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../content/site';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    const payload = new URLSearchParams();
    payload.append('form-name', 'lead-magnet');
    payload.append('bot-field', '');
    payload.append('name', name);
    payload.append('email', email);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
    } catch {
      // Still show the checklist even if the local fetch fails.
    }

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'lead_magnet_signup' });
    }

    setStatus('success');
  };

  return (
    <section className="section lead-magnet" id="checklist">
      <div className="wrap">
        <div className="lead-magnet__box">
          <div>
            <p className="hero__context">Безплатен материал</p>
            <h2>Готови ли сте за 2027?</h2>
            <p>
              Изтеглете безплатния checklist с 14 неща, които трябва да проверите в договорите,
              работното време, стажа и възнагражденията.
            </p>
          </div>
          {status === 'success' ? (
            <div>
              <p className="form-success">
                Готово. Може да отворите checklist-а веднага.
              </p>
              <div className="actions" style={{ marginTop: 12 }}>
                <Link className="btn btn--primary" to={ROUTES.CHECKLIST}>
                  Отворете checklist-а
                </Link>
                <a className="btn btn--ghost" href="/checklist-2027.docx" download>
                  Изтеглете Word файла
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-magnet__form">
              <div className="field">
                <label htmlFor="lm-name">Име</label>
                <input
                  className="input"
                  id="lm-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lm-email">Имейл</label>
                <input
                  className="input"
                  id="lm-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  required
                  aria-invalid={status === 'error'}
                />
                {status === 'error' && (
                  <p className="form-error">
                    Имейлът не изглежда правилен. Проверете го и опитайте отново.
                  </p>
                )}
              </div>
              <button className="btn btn--primary" type="submit">
                Изтеглете checklist-а
              </button>
              <p className="fine">
                Ще Ви изпратим и информация за семинара на 28 октомври. Отписвате се по всяко време.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
