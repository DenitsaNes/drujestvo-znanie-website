import { Link, useLocation } from 'react-router-dom';

const pathLabels = {
  '': 'Начало',
  'za-nas': 'За нас',
  'upravitelen-savet': 'Управителен съвет',
  deynost: 'Дейност',
  kontakti: 'Контакти',
  chlenstvo: 'Членство',
};

function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Пътека" className="breadcrumb container">
      <ol>
        <li>
          <Link to="/">Начало</Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment}>
            {index === segments.length - 1 ? (
              <span>{pathLabels[segment] || segment}</span>
            ) : (
              <Link to={`/${segment}`}>{pathLabels[segment] || segment}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
