import { Link } from 'react-router-dom';
import QuickCard from '../components/QuickCard';
import CourseCard from '../components/CourseCard';
import SEO from '../components/SEO';
import { courses } from '../data/courses';

function Home() {
  return (
    <>
      <SEO
        description="Дружество „Знание“ — неправителствена организация в Хасково. Практически семинари по данъчно и трудово законодателство с утвърдени експерти."
        pathname="/"
      />
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Дружество "Знание"</h1>
          <p className="hero__subtitle">

             Данъчна помощ за всеки
          </p>
          <p className="placeholder-note">
             Неправителствена организация в гр. Хасково, България
          </p>
          <Link to="/zapisi?course=trudov-kodeks#registration-form" className="button button--huge">
            Запиши се за семинара
          </Link>
        </div>
      </section>

      <section className="section section--quick-cards">
        <div className="container">
          <div className="quick-cards quick-cards--two">
            <QuickCard
              to="/zapisi?course=trudov-kodeks#registration-form"
              title="28 октомври"
              text="Семинар с Теодора Дичева: трудов стаж и прозрачност на заплащането."
              cta="Запиши се"
            />
            <QuickCard
              to="/za-nas"
              title="За нас"
              text="История, мисия и управителен съвет на Дружество „Знание“."
              cta="Научи повече"
            />
          </div>
        </div>
      </section>

      <section className="section section--featured">
        <div className="container featured-seminar">
          <div className="featured-seminar__badge">Предстоящ семинар</div>
          <h2 className="featured-seminar__title">
            Новите правила за трудовия стаж и прозрачността на заплащането
          </h2>
          <p className="featured-seminar__meta">
            28 октомври 2026 г. • Хасково • с Теодора Дичева
          </p>
          <p className="featured-seminar__text">
            Практически семинар за работодатели, HR специалисти, ТРЗ експерти,
            счетоводители и мениджъри. Подгответе организацията си за промените през
            2027 г.
          </p>
          <Link
            to="/zapisi?course=trudov-kodeks#registration-form"
            className="button button--large"
          >
            Запиши се за семинара
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Курсове</h2>
          <p className="section-subtitle">
            Семинари по 4 часа онлайн с утвърдени експерти в областта на данъчното
            облагане.
          </p>
          <div className="course-cards">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
