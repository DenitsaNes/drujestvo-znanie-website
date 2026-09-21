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
    earlyRegistration: false,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedCourse = useMemo(
    () => getCourseById(formData.courseId) || courses[0],
    [formData.courseId]
  );

  const currentPrice = formData.earlyRegistration
    ? selectedCourse.earlyPrice
    : selectedCourse.fullPrice;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
            Цена: <strong>{currentPrice} лв.</strong>
            {formData.earlyRegistration && (
              <span className="price-note"> (ранно записване)</span>
            )}
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
              <label htmlFor="courseId">Избран курс</label>
              <select
                id="courseId"
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
                required
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title} — {course.date}
                  </option>
                ))}
              </select>
            </div>
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

          <div className="early-bird-box">
            <label className="early-bird-toggle">
              <input
                type="checkbox"
                name="earlyRegistration"
                checked={formData.earlyRegistration}
                onChange={handleChange}
              />
              <span className="toggle-label">Ранно записване</span>
            </label>
            <p className="early-bird-info">
              Включи ранно записване и получи отстъпка.
            </p>
          </div>

          <div className="price-summary">
            <span className="price-label">Крайна цена:</span>
            <span className="price-value">{currentPrice} лв.</span>
            {formData.earlyRegistration && (
              <span className="price-original">
                {selectedCourse.fullPrice} лв.
              </span>
            )}
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
