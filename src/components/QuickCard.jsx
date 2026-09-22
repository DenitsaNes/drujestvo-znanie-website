import { Link } from 'react-router-dom';

function QuickCard({ to, title, text, cta = 'Научи повече' }) {
  return (
    <Link to={to} className="quick-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="quick-card__cta">{cta}</span>
    </Link>
  );
}

export default QuickCard;
