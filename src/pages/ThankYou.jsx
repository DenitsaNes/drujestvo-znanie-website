import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE, ROUTES, fmtPrice, emailHref } from '../content/site';


export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name || '';
  const email = state?.email || '';
  const total = state?.total ?? SITE.PRICE;

  useEffect(() => {
    try {
      const consent = localStorage.getItem('znanie_cookie_consent');
      if (consent === 'yes' && window.dataLayer) {
        window.dataLayer.push({
          event: 'registration_complete',
          value: total,
          currency: 'EUR',
        });
      }
    } catch {
      // ignore
    }
  }, [total]);

  return (
    <>
      <SEO
        title="Благодарим за записването"
        pathname={ROUTES.BLAGODARIM}
        description="Благодарим за записването. Остава плащането по банков път, за да бъде потвърдено мястото Ви."
        noindex
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>Получихме заявката Ви</h1>
          </div>
          <p className="measure">
            Остава една стъпка: плащането. Мястото Ви е потвърдено, когато сумата постъпи.
          </p>

          <h2>Данни за плащане</h2>
          <table className="ledger" style={{ marginTop: 24 }}>
            <tbody>
              <tr><td>Получател</td><td>{SITE.ORG}</td></tr>
              <tr><td>IBAN</td><td>{SITE.BANK_IBAN}</td></tr>
              <tr><td>BIC/SWIFT</td><td>{SITE.BANK_BIC}</td></tr>
              <tr><td>Сума</td><td>{fmtPrice(total)}</td></tr>
              <tr><td>Основание</td><td>Семинар 28.10 — {name}</td></tr>
            </tbody>
          </table>

          {email && (
            <p className="muted" style={{ marginTop: 16 }}>
              Изпратихме тези данни и на {email}.
            </p>
          )}

          <h2 style={{ marginTop: 40 }}>Какво следва</h2>
          <ul className="list" style={{ marginTop: 12 }}>
            <li>Ден преди семинара ще получите линк за Zoom.</li>
            <li>
              Ако имате въпрос, пишете ни {SITE.EMAIL && <a href={emailHref()}>{SITE.EMAIL}</a>}{' '}
              {SITE.EMAIL && SITE.PHONE ? 'или' : ''}{' '}
              <a href={SITE.PHONE_HREF}>{SITE.PHONE}</a>.
            </li>
          </ul>

          <div className="actions" style={{ marginTop: 32 }}>
            <Link className="btn btn--primary" to={ROUTES.HOME}>
              Към началото
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
