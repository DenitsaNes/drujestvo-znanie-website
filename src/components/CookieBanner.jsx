import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../content/site';

const CONSENT_KEY = 'znanie_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const setConsent = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      if (value === 'yes' && window.dataLayer) {
        window.dataLayer.push({ event: 'cookie_consent_given' });
      }
      window.dispatchEvent(new Event('znanie-consent'));
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Бисквитки">
      <div className="wrap">
        <p>
          Използваме бисквитки, за да разберем как се ползва сайтът и откъде идват
          записванията. Без Вашето съгласие не ги включваме.
        </p>
        <div className="actions">
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => setConsent('yes')}
          >
            Приемам
          </button>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => setConsent('no')}
          >
            Отказвам
          </button>
          <Link className="btn btn--ghost" to={ROUTES.COOKIES}>
            Настройки
          </Link>
        </div>
      </div>
    </div>
  );
}
