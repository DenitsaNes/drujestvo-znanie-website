import { Link } from 'react-router-dom';
import QuickCard from '../components/QuickCard';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Дружество "Знание"</h1>
          <p className="hero__subtitle">

             Данъчна помощ за всеки
          </p>
          <p className="placeholder-note">
             Неправителствена организация в гр. Хасково, България
          </p>
          <Link to="/zapisi" className="button">
            Запиши се
          </Link>
        </div>
      </section>

      <section className="section section--quick-cards">
        <div className="container">
          <div className="quick-cards quick-cards--two">
            <QuickCard
              to="/zapisi"
              title="Курсове"
              text="Практически онлайн семинари по данъчно облагане."
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
