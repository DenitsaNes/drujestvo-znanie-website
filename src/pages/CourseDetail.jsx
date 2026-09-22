import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';

function CourseDetail() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to="/deynost" replace />;
  }

  const { title, description, date, note, fullPrice } = course;

  return (
    <section className="section course-detail">
      <div className="container">
        <div className="course-detail__header">
          <span className="course-card__date">{date}</span>
          <h1 className="page-title">{title}</h1>
          <p className="course-detail__subtitle">{description}</p>
          <p className="course-detail__note">{note}</p>
        </div>

        <div className="course-detail__grid">
          <div className="course-detail__content">
            <h2 className="section-title">Какво ще научиш</h2>
            <ul className="course-detail__list">
              <li>Последните промени в законодателството и тяхното практическо прилагане</li>
              <li>Как да избегнеш често срещани грешки и санкции</li>
              <li>Работа с реални казуси и примери от практиката</li>
              <li>Практически стъпки, които можеш да приложиш веднага</li>
            </ul>

            <h2 className="section-title">Какво включва семинарът</h2>
            <ul className="course-detail__list">
              <li>4 часа онлайн обучение на живо с експерт</li>
              <li>Работни материали — презентация, чеклист и шаблон</li>
              <li>Запис на семинара за повторно гледане</li>
              <li>Сертификат за участие</li>
              <li>Q&A сесия на живо</li>
              <li>Достъп до затворена група за въпроси след обучението</li>
            </ul>

            <div className="course-detail__guarantee">
              <h3>Гаранция</h3>
              <p>
                Ако не намериш стойността в първите 30 минути, връщаме парите — без
                въпроси.
              </p>
            </div>
          </div>

          <div className="course-detail__offer">
            <div className="offer-card">
              <h2 className="offer-card__title">Запиши се сега</h2>
              <p className="offer-card__price">
                <span className="offer-card__amount">{fullPrice}</span>
                <span className="offer-card__currency">€</span>
              </p>
              <p className="offer-card__note">
                Местата са ограничени — приемаме само 30 участника, за да може всеки
                да получи отговор на въпросите си.
              </p>
              <Link
                to={`/zapisi?course=${course.id}`}
                className="button button--large"
              >
                Запиши се
              </Link>
              <p className="offer-card__security">
                След записване ще се свържем с теб за потвърждение и детайли за
                плащане.
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
