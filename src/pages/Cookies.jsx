import SEO from '../components/SEO';
import { SITE, ROUTES } from '../content/site';

export default function Cookies() {
  return (
    <>
      <SEO
        title="Бисквитки"
        description="Информация за бисквитките на сайта на Дружество „Знание“ и как можете да управлявате съгласието си."
        pathname={ROUTES.COOKIES}
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>Бисквитки</h1>
          </div>
          <p className="measure">
            {SITE.ORG} използва бисквитки, за да разбере как се ползва сайтът и откъде идват
            записванията. Без Вашето съгласие не ги включваме.
          </p>

          <h2 style={{ marginTop: 28 }}>Какви бисквитки ползваме</h2>
          <ul className="list" style={{ marginTop: 12 }}>
            <li><strong>Необходими:</strong> технически бисквитки, без които сайтът не работи.</li>
            <li><strong>Аналитични:</strong> ни помагат да разберем как посетителите ползват сайта.</li>
            <li><strong>Рекламни:</strong> използват се за измерване на ефективността на рекламите.</li>
          </ul>

          <h2 style={{ marginTop: 28 }}>Как да промените съгласието си</h2>
          <p className="measure">
            Можете да приемете или откажете бисквитките от банера в долния край на страницата. Можете
            също така да изчистите бисквитките от настройките на браузъра си.
          </p>

          <h2 style={{ marginTop: 28 }}>Контакт</h2>
          <p className="measure">
            Ако имате въпроси относно бисквитките, свържете се с нас през страницата{' '}
            <a href={ROUTES.KONTAKTI}>Контакти</a>.
          </p>
        </div>
      </section>
    </>
  );
}
