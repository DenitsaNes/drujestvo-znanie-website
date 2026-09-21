import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const { id, title, description, date } = course;

  return (
    <Link to={`/zapisi?course=${id}`} className="course-card course-card--clickable">
      <span className="course-card__date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="course-card__cta">Запиши се →</span>
    </Link>
  );
}

export default CourseCard;
