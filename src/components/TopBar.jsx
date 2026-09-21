import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <Link to="/kontakti">Контакти</Link>
      </div>
    </div>
  );
}

export default TopBar;
