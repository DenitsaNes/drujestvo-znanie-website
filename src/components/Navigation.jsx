import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Начало' },
  { to: '/upravitelen-savet', label: 'Управителен съвет' },
  { to: '/deynost', label: 'Дейност' },
  { to: '/zapisi', label: 'Записване' },
  { to: '/za-nas', label: 'За нас' },
  { to: '/kontakti', label: 'Контакти' },
];

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Главна навигация">
      <div className="container nav__inner">
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Отвори/затвори менюто"
        >
          ☰
        </button>
        <ul
          id="primary-menu"
          className={`nav__list ${open ? 'nav__list--open' : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'nav__link nav__link--active' : 'nav__link'
                }
                onClick={() => setOpen(false)}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
