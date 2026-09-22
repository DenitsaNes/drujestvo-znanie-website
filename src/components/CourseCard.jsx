import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const { id, title, description, date, fullPrice } = course;

  return (
    <Link to={`/deynost/${id}`} className="course-card course-card--clickable">
      <span className="course-card__date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {fullPrice && (
        <p className="course-card__price">
          <strong>{fullPrice} €</strong>
        </p>
      )}
      <span className="course-card__cta">Виж повече →</span>
    </Link>
  );
}

export default CourseCard;
