import { Link } from 'react-router-dom';
import { SITE, ROUTES, currentYear, emailHref } from '../content/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <b>{SITE.ORG}</b>
          <p>
            Практически семинари по трудово и данъчно законодателство за
            счетоводители, ТРЗ и HR специалисти.
          </p>
          <p>
            {SITE.LEGAL}
            <br />
            {SITE.ADDRESS}
          </p>
          <p>
            <a href={SITE.PHONE_HREF}>{SITE.PHONE}</a>
            {SITE.EMAIL && (
              <>
                {' · '}
                <a href={emailHref()}>{SITE.EMAIL}</a>
              </>
            )}
          </p>
        </div>
        <ul>
          <li><Link to={`${ROUTES.HOME}#seminari`}>Семинари</Link></li>
          <li><Link to={`${ROUTES.HOME}#ceni`}>Цени</Link></li>
          <li><Link to={ROUTES.ZA_NAS}>За нас</Link></li>
          <li><Link to={ROUTES.KONTAKTI}>Контакти</Link></li>
          <li><Link to={ROUTES.PRIVACY}>Политика за поверителност</Link></li>
          <li><Link to={ROUTES.COOKIES}>Бисквитки</Link></li>
        </ul>
        <p className="copy">© {currentYear()} {SITE.ORG}</p>
      </div>
    </footer>
  );
}
