import { Link } from 'react-router-dom';
import { registrationHref } from '../content/site';

export default function ClosingCta() {
  return (
    <section className="closing">
      <div className="wrap">
        <h2>2027 идва, независимо дали сте готови</h2>
        <p>Започнете подготовката на 28 или 30 октомври.</p>
        <div className="actions">
          <Link className="btn btn--primary" to={registrationHref()}>
            Запишете се за 28 октомври
          </Link>
          <Link className="btn btn--ghost" to={registrationHref({ course: 'zkpo' })}>
            Запишете се за 30 октомври
          </Link>
        </div>
      </div>
    </section>
  );
}
