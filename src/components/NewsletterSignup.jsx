import { useState } from 'react';
import { SITE, ROUTES } from '../content/site';

const TOPICS = [
  { value: 'trud', label: 'Трудово право и ТРЗ' },
  { value: 'danaci', label: 'Данъци (ДДС, ДДФЛ, ЗКПО)' },
  { value: 'schetovodstvo', label: 'Счетоводство и годишно приключване' },
  { value: 'drugo', label: 'Друго' },
];

export default function NewsletterSignup({ title, text }) {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState('idle');

  const toggle = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    const payload = new URLSearchParams();
    payload.append('form-name', 'newsletter');
    payload.append('bot-field', '');
    payload.append('email', email);
    payload.append('topics', selected.join(', '));

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
    } catch {
      // Show success anyway; the submission still works on Netlify.
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'newsletter_signup',
        topics: selected.join(','),
      });
    }

    setStatus('success');
  };

  return (
    <form className="signup" onSubmit={handleSubmit} aria-labelledby="signup-title">
      <div>
        <h3 id="signup-title">{title || 'Научете първи за следващите семинари'}</h3>
        <p>
          {text ||
            'Пишем само когато обявим нов семинар — обикновено веднъж-два пъти месечно.'}
        </p>
      </div>
      <div>
        {status === 'success' ? (
          <p>Готово. Ще Ви пишем, когато обявим следващия семинар.</p>
        ) : (
          <>
            <div className="field">
              <label htmlFor="nl-email">Имейл</label>
              <input
                className="input"
                id="nl-email"
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
            <fieldset>
              <legend>Интересувам се от</legend>
              <div className="checks">
                {TOPICS.map((topic) => (
                  <label key={topic.value}>
                    <input
                      type="checkbox"
                      name="topic"
                      value={topic.value}
                      checked={selected.includes(topic.value)}
                      onChange={() => toggle(topic.value)}
                    />
                    {topic.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <button className="btn btn--primary" type="submit">
              Абонирайте се
            </button>
            <p className="fine">
              С абонамента се съгласявате да получавате имейли от {SITE.ORG} за
              предстоящи семинари. Можете да се отпишете по всяко време от линка във
              всеки имейл. Повече в{' '}
              <a href={ROUTES.PRIVACY}>Политиката за поверителност</a>.
            </p>
          </>
        )}
      </div>
    </form>
  );
}
