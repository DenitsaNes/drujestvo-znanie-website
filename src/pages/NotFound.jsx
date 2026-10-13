import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ROUTES } from '../content/site';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Страницата не е намерена"
        description="Страницата, която търсите, не съществува."
        pathname={ROUTES.HOME}
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>Тази страница не съществува</h1>
          </div>
          <p className="measure">Може адресът да е сгрешен или страницата да е преместена.</p>
          <div className="actions" style={{ marginTop: 28 }}>
            <Link className="btn btn--primary" to={ROUTES.HOME}>
              Към началото
            </Link>
            <Link className="btn btn--ghost" to={ROUTES.SEMINAR_28_OKT}>
              Предстоящ семинар
            </Link>
            <Link className="btn btn--ghost" to={ROUTES.KONTAKTI}>
              Контакти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
