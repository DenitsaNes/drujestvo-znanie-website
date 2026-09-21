import { Link } from 'react-router-dom';

function QuickCard({ to, title, text }) {
  return (
    <Link to={to} className="quick-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}

export default QuickCard;
