import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';

function CourseDetail() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to="/deynost" replace />;
  }

  const { title, description, date, note, fullPrice, earlyPrice } = course;
  const savings = fullPrice && earlyPrice && fullPrice > earlyPrice ? fullPrice - earlyPrice : 0;

  return (
    <section className="section course-detail">
      <div className="container">
        {/* Ранно записване / спешност */}
        <div className="course-urgency">
          <span className="course-urgency__badge">Ранно записване</span>
          <span>
            Местата са ограничени — приемаме само 30 участника, за да може всеки да получи
            отговор на въпросите си.
          </span>
        </div>

        {/* Продуктова секция: заглавие + снимка/плакат + цена + CTA */}
        <div className="course-product">
          <div className="course-product__gallery">
            <div className="course-image-placeholder" aria-label="Семинар">
              <span className="course-image-placeholder__label">{title}</span>
              <span className="course-image-placeholder__meta">Онлайн обучение на живо</span>
            </div>
          </div>

          <div className="course-product__info">
            <span className="course-card__date">{date}</span>
            <h1 className="course-product__title">{title}</h1>
            <p className="course-product__subtitle">{description}</p>
            {note && <p className="course-product__note">{note}</p>}

            <div className="course-product__prices">
              {savings > 0 ? (
                <>
                  <p className="course-price course-price--current">
                    <span className="course-price__amount">{earlyPrice}</span>
                    <span className="course-price__currency">€</span>
                    <span className="course-price__label">ранно записване</span>
                  </p>
                  <p className="course-price course-price--old">
                    <span className="course-price__amount">{fullPrice}</span>
                    <span className="course-price__currency">€</span>
                    <span className="course-price__label">редовна цена</span>
                  </p>
                </>
              ) : (
                <p className="course-price course-price--current">
                  <span className="course-price__amount">{fullPrice}</span>
                  <span className="course-price__currency">€</span>
                  <span className="course-price__label">специална цена</span>
                </p>
              )}
            </div>

            <Link to={`/zapisi?course=${course.id}`} className="button button--large course-product__cta">
              Запиши се сега
            </Link>

            <p className="course-product__security">
              След записване ще се свържем с теб за потвърждение и детайли за плащане.
            </p>
          </div>
        </div>

        {/* Описание + банкови реквизити */}
        <div className="course-tabs">
          <div className="course-tabs__nav">
            <button className="course-tabs__tab course-tabs__tab--active">Описание</button>
          </div>
          <div className="course-tabs__content">
            <p className="course-lead">
              Практически семинар, който ти дава яснота и спокойствие в работата с{' '}
              <strong>{title}</strong>. За 4 часа на живо с експерт ще видиш как точно се
              прилагат промените в законодателството — без суха теория, само конкретни
              стъпки, които можеш да използваш веднага.
            </p>

            <div className="course-bank">
              <h3>Банкови реквизити за плащане по банков път</h3>
              <p>
                <strong>Дружество „Знание“</strong>
                <br />
                IBAN: <strong>BG00 XXXX 0000 0000 0000 00</strong>
                <br />
                Основание: <strong>„{title} — {date}"</strong>
              </p>
              <p className="course-bank__note">
                След записване ще се свържем с теб с конкретни инструкции за плащане.
              </p>
            </div>
          </div>
        </div>

        {/* Втора продажна секция: какво ще научиш + включва */}
        <div className="course-pitch">
          <h2 className="course-pitch__title">
            {title}: Практически семинар за спокойна работа със закона
          </h2>

          <div className="course-pitch__grid">
            <div className="course-pitch__block">
              <h3 className="section-title">Какво ще научиш</h3>
              <ul className="course-detail__list">
                <li>Последните промени в законодателството и тяхното практическо прилагане</li>
                <li>Как да избегнеш често срещани грешки и санкции</li>
                <li>Работа с реални казуси и примери от практиката</li>
                <li>Практически стъпки, които можеш да приложиш веднага</li>
              </ul>
            </div>

            <div className="course-pitch__block">
              <h3 className="section-title">Какво включва семинарът</h3>
              <ul className="course-detail__list">
                <li>4 часа онлайн обучение на живо с експерт</li>
                <li>Работни материали — презентация, чеклист и шаблон</li>
                <li>Сертификат за участие</li>
                <li>Q&A сесия на живо</li>
                <li>Достъп до затворена група за въпроси след обучението</li>
              </ul>
            </div>
          </div>

          <div className="course-pitch__trust course-pitch__trust--two">
            <div className="trust-card">
              <h3>Намаления</h3>
              <p>
                Възможност за групови отстъпки при записване на 3+ участника от една фирма.
                Пиши ни за индивидуална оферта.
              </p>
            </div>
            <div className="trust-card">
              <h3>Контакт</h3>
              <p>
                Телефон: <a href="tel:0878398920">0878 398 920</a>
                <br />
                Имейл: <a href="mailto:drujestvo_znanie@abv.bg">drujestvo_znanie@abv.bg</a>
              </p>
            </div>
          </div>
        </div>

        <div className="course-detail__back">
          <Link to="/deynost">← Обратно към всички обучения</Link>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;
