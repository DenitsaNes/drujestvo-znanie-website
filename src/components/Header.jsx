import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link to="/" className="header__text-link">
          <h1 className="header__title">Дружество "Знание"</h1>
          <p className="header__subtitle">гр. Хасково</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
