import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <h4>Дружество "Знание"</h4>
          <p>Haskovo, България</p>
          <p>ЕИК: 000907978</p>
        </div>
        <div>
          <h4>Бързи връзки</h4>
          <ul>
            <li>
              <Link to="/za-nas">За нас</Link>
            </li>
            <li>
              <Link to="/upravitelen-savet">Управителен съвет</Link>
            </li>
            <li>
              <Link to="/deynost">Дейност</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Информация</h4>
          <ul>
            <li>
              <Link to="/kontakti">Контакти</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Забележка</h4>
          <p>
            Този сайт е информационен сайт на Дружество "Знание". Всички данни
            са според публични източници.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © {currentYear} Дружество "Знание". Всички права запазени.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
