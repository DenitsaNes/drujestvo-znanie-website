import { Link } from 'react-router-dom';

function Activities() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Дейност</h1>

        <div className="placeholder-box">
          <h2>Програми и проекти</h2>
          <p>
            [Място за описание на програмите, проектите и инициативите на
            Дружество "Знание".]
          </p>
        </div>

        <div className="placeholder-box">
          <h2>Обучения по счетоводство</h2>
          <p>
            Провеждаме професионални обучения по счетоводство за начинаещи и
            напреднали — теория, практика и работа с реални документи.
          </p>
          <p>
            Организираме семинари по 4 часа онлайн с утвърдени експерти в областта
            на данъчното облагане.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/chlenstvo" className="button button--large">
            Стани член
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Activities;
