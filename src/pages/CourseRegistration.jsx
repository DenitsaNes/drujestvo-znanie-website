import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { courses, getCourseById } from '../data/courses';

function CourseRegistration() {
  const [searchParams] = useSearchParams();
  const initialCourseId = searchParams.get('course') || courses[0].id;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: initialCourseId,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedCourse = useMemo(
    () => getCourseById(formData.courseId) || courses[0],
    [formData.courseId]
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const selectCourse = (courseId) => {
    setFormData((prev) => ({ ...prev, courseId }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section registration-page">
        <div className="container registration-success">
          <div className="success-icon">✓</div>
          <h1 className="page-title">Успешно записване</h1>
          <p>
            Благодарим ти, <strong>{formData.name}</strong>! Записахме те за{' '}
            <strong>{selectedCourse.title}</strong>.
          </p>
          <p>
            Дата: <strong>{selectedCourse.date}</strong>
          </p>
          <p>
            Цена: <strong>{selectedCourse.fullPrice} €</strong>
          </p>
          <p className="success-info">
            Ще се свържем с теб на имейл или телефон за потвърждение.
          </p>
          <Link to="/" className="button">
            Назад към началото
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section registration-page">
      <div className="container">
        <h1 className="page-title">Записване за курс</h1>

        <h2 className="section-title registration-choose-title">Изберете семинар</h2>
        <div className="registration-courses">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`registration-course ${
                formData.courseId === course.id ? 'registration-course--selected' : ''
              }`}
              onClick={() => selectCourse(course.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  selectCourse(course.id);
                }
              }}
              aria-pressed={formData.courseId === course.id}
            >
              <div className="registration-course__image">
                <span>{course.title}</span>
              </div>
              <div className="registration-course__body">
                <p className="registration-course__price">
                  <strong>{course.fullPrice} €</strong>
                </p>
                <h3 className="registration-course__title">Онлайн обучение: {course.title}</h3>
                <p className="registration-course__description">{course.description}</p>
                <ul className="registration-course__details">
                  <li>{course.date}</li>
                  <li>Онлайн: през Zoom</li>
                  <li>4 часа с експерт</li>
                </ul>
                <span className="registration-course__cta">
                  {formData.courseId === course.id ? 'Избран ✓' : 'Избери'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="registration-summary">
          <span className="date-badge">{selectedCourse.date}</span>
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <p className="registration-note">{selectedCourse.note}</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Име и фамилия</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Въведете име и фамилия"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Имейл</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="08xxxxxxxx"
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Бележки</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Допълнителна информация (по желание)"
              ></textarea>
            </div>
          </div>

          <div className="price-summary">
            <span className="price-label">Крайна цена:</span>
            <span className="price-value">{selectedCourse.fullPrice} €</span>
          </div>

          <button type="submit" className="button button--large button--submit">
            Изпрати заявление
          </button>
        </form>
      </div>
    </section>
  );
}

export default CourseRegistration;
