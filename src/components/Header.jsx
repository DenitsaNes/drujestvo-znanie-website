import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SITE, ROUTES, registrationHref } from '../content/site';

const navItems = [
  { to: `${ROUTES.HOME}#seminari`, label: 'Семинари' },
  { to: `${ROUTES.HOME}#ceni`, label: 'Цени' },
  { to: `${ROUTES.HOME}#lektor`, label: 'Лектор' },
  { to: ROUTES.ZA_NAS, label: 'За нас' },
  { to: ROUTES.KONTAKTI, label: 'Контакти' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" to={ROUTES.HOME} aria-label={`${SITE.ORG} — начало`}>
          <b>{SITE.ORG_SHORT}</b>
          <span>Хасково, от {SITE.FOUNDED} г.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Затвори менюто' : 'Отвори менюто'}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Затвори' : 'Меню'}
        </button>
        <nav className={`nav ${open ? 'is-open' : ''}`} id="nav" aria-label="Главна навигация">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  end={item.to === ROUTES.HOME}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn--primary" to={registrationHref()} onClick={() => setOpen(false)}>
            Запишете се
          </Link>
        </nav>
      </div>
    </header>
  );
}
