import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { courses, getCourseById } from '../data/courses';

const FORM_NAME = 'course-registration';

function getGroupPrice(quantity, basePrice) {
  if (quantity >= 10) return { perPerson: 60, note: 'Корпоративен пакет 10+' };
  if (quantity >= 5) return { perPerson: 75, note: 'Групова цена 5–9 души' };
  if (quantity >= 3) return { perPerson: 85, note: 'Групова цена 3–4 души' };
  return { perPerson: basePrice, note: 'Индивидуална цена' };
}

function CourseRegistration() {
  const [searchParams] = useSearchParams();
  const initialCourseId = searchParams.get('course') || courses[0].id;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 1,
    courseId: initialCourseId,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      const form = document.getElementById('registration-form');
      if (form) {
        setTimeout(() => {
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [searchParams]);

  const selectedCourse = useMemo(
    () => getCourseById(formData.courseId) || courses[0],
    [formData.courseId]
  );

  const quantity = Math.max(1, Number(formData.quantity) || 1);
  const groupPrice = getGroupPrice(quantity, selectedCourse.fullPrice);
  const totalPrice = groupPrice.perPerson * quantity;

  const validateForm = (data) => {
    const newErrors = {};

    const email = data.email.trim().toLowerCase();
    if (!email) {
      newErrors.email = 'Моля, въведете имейл.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Моля, въведете валиден имейл.';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');
    if (!data.phone.trim()) {
      newErrors.phone = 'Моля, въведете телефон.';
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = 'Телефонът трябва да съдържа точно 10 цифри.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const selectCourse = (courseId) => {
    setFormData((prev) => ({ ...prev, courseId }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const payload = new FormData(event.target);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(payload).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert('Възникна грешка при изпращането. Моля, опитай отново.');
        // eslint-disable-next-line no-console
        console.error(error);
      })
      .finally(() => setSubmitting(false));
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Успешно записване"
          description="Благодарим за записването. Ще се свържем с вас с инструкции за плащане."
          pathname="/zapisi"
        />
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
            Цена: <strong>{totalPrice} €</strong>
            {quantity > 1 && (
              <span className="price-note"> ({quantity} x {groupPrice.perPerson} €)</span>
            )}
          </p>
          <p className="success-info">
            Ще се свържем с теб на имейл или телефон с инструкции за плащане по банков
            път. Записването става финално след получено плащане.
          </p>
          <Link to="/" className="button">
            Назад към началото
          </Link>
        </div>
      </section>
    </>
  );
  }

  return (
    <>
      <SEO
        title="Записване за семинар"
        description="Запишете се за практически семинар на Дружество „Знание“. Онлайн обучения по данъчно и трудово законодателство."
        pathname="/zapisi"
      />
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
                  <strong>от {course.fullPrice} €</strong>
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

        <div className="group-pricing">
          <h3 className="group-pricing__title">Групово участие — по-изгодно</h3>
          <div className="group-pricing__grid">
            <div className="group-pricing__tier">
              <span className="group-pricing__qty">1 човек</span>
              <span className="group-pricing__price">{selectedCourse.fullPrice} €</span>
            </div>
            <div className="group-pricing__tier">
              <span className="group-pricing__qty">3–4 души</span>
              <span className="group-pricing__price">85 €/човек</span>
            </div>
            <div className="group-pricing__tier">
              <span className="group-pricing__qty">5–9 души</span>
              <span className="group-pricing__price">75 €/човек</span>
            </div>
            <div className="group-pricing__tier">
              <span className="group-pricing__qty">10+ души</span>
              <span className="group-pricing__price">60 €/човек</span>
            </div>
          </div>
        </div>

        <form
          id="registration-form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="registration-form"
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="form-honeypot">
            <label>
              Не попълвайте това поле, ако сте човек:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <input type="hidden" name="courseTitle" value={selectedCourse.title} />
          <input type="hidden" name="courseDate" value={selectedCourse.date} />
          <input type="hidden" name="pricePerPerson" value={`${groupPrice.perPerson} €`} />
          <input type="hidden" name="totalPrice" value={`${totalPrice} €`} />

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
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="form-error" role="alert">
                  {errors.email}
                </p>
              )}
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
                pattern="[0-9]{10}"
                placeholder="08xxxxxxxx"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="form-error" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="company">Фирма / Организация</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="По желание"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Брой участници</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Бележки / Въпрос към лектора</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Допълнителна информация или конкретен казус (по желание)"
              ></textarea>
            </div>
          </div>

          <div className="price-summary">
            <span className="price-label">{groupPrice.note}:</span>
            <span className="price-value">
              {totalPrice} €
              {quantity > 1 && (
                <span className="price-note"> ({quantity} x {groupPrice.perPerson} €)</span>
              )}
            </span>
          </div>

          <button
            type="submit"
            className="button button--large button--submit"
            disabled={submitting}
          >
            {submitting ? 'Изпраща се...' : 'Изпрати заявление'}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

export default CourseRegistration;
