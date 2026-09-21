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
          <Link to="/za-nas" className="button">
            Научете повече
          </Link>
        </div>
      </section>

      <section className="section section--quick-cards">
        <div className="container">
          <div className="quick-cards">
            <QuickCard
              to="/za-nas"
              title="За нас"
              text="Регистрация, правна форма и адрес."
            />
            <QuickCard
              to="/upravitelen-savet"
              title="Управителен съвет"
              text="Членове на управителния съвет."
            />
            <QuickCard
              to="/deynost"
              title="Дейност"
              text="Програми и инициативи."
            />
            <QuickCard
              to="/kontakti"
              title="Контакти"
              text="Форма за връзка и адрес."
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
