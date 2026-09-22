import CheckoutButton from './CheckoutButton';

function CourseCard({ course }) {
  const { title, description, date, fullPrice, stripePriceId } = course;

  return (
    <div className="course-card">
      <span className="course-card__date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {fullPrice && (
        <p className="course-card__price">
          <strong>{fullPrice} лв.</strong>
        </p>
      )}
      {stripePriceId ? (
        <CheckoutButton priceId={stripePriceId}>
          Запиши се и плати
        </CheckoutButton>
      ) : (
        <button className="button" disabled style={{ marginTop: '1rem', width: '100%' }}>
          Скоро ще може да се записва
        </button>
      )}
    </div>
  );
}

export default CourseCard;
