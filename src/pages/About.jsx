import SEO from '../components/SEO';
import NewsletterSignup from '../components/NewsletterSignup';
import { SITE, ROUTES } from '../content/site';

export default function About() {
  return (
    <>
      <SEO
        title="За нас — Дружество „Знание“, Хасково"
        description="Дружество „Знание“ е сдружение от Хасково, основано през 1991 г. Организираме практически семинари по трудово и данъчно законодателство."
        pathname={ROUTES.ZA_NAS}
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>За {SITE.ORG}</h1>
          </div>
          <p className="measure">
            {SITE.ORG} е сдружение с нестопанска цел, създадено в Хасково през {SITE.FOUNDED} г.
            Организираме практически семинари по трудово и данъчно законодателство за счетоводители,
            ТРЗ и HR специалисти, както и за работодатели.
          </p>
          <p className="measure" style={{ marginTop: 16 }}>
            Правим семинарите си с лектори, които познават практиката отвътре. Целта е проста: след
            всеки семинар да знаете какво да направите на работа на следващия ден.
          </p>

          <h2 style={{ marginTop: 48 }}>Управителен съвет</h2>
          <ul className="list" style={{ marginTop: 16 }}>
            <li>Милен Господинов Несторов</li>
            <li>Христина Вълкова Хубенова</li>
            <li>Маргарита Атанасова Димитрова</li>
            <li>Златка Димитрова Михайлова-Найденова</li>
            <li>Татяна Ангелова Матева</li>
          </ul>

          <h2 style={{ marginTop: 48 }}>Данни за организацията</h2>
          <table className="ledger" style={{ marginTop: 20 }}>
            <tbody>
              <tr><td>Наименование</td><td>{SITE.ORG}</td></tr>
              <tr><td>Правна форма</td><td>Сдружение</td></tr>
              <tr><td>ЕИК</td><td>000907978</td></tr>
              <tr><td>ДДС регистрация</td><td>Не</td></tr>
              <tr><td>Основано</td><td>{SITE.FOUNDED} г.</td></tr>
              <tr><td>Адрес</td><td>{SITE.ADDRESS}</td></tr>
            </tbody>
          </table>

          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
