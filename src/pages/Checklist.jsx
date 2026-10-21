import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE, ROUTES, registrationHref } from '../content/site';

const GROUPS = [
  {
    title: 'Трудови договори',
    items: [
      'Проверете дали в договорите е описано работното време в часове.',
      'Отбележете договорите за непълно работно време.',
      'Прегледайте случаите с повече от един трудов договор.',
    ],
  },
  {
    title: 'Работно време и стаж',
    items: [
      'Проверете как отчитате действително положения труд.',
      'Прегледайте сумираното изчисляване на работното време.',
      'Уточнете как ще изчислявате стажа в часове, дни, месеци и години.',
      'Отбележете заварените случаи, които изискват отделен подход.',
    ],
  },
  {
    title: 'Документиране',
    items: [
      'Проверете как се вписва стажът в документите Ви.',
      'Уточнете кой отговаря за актуализацията на данните.',
      'Планирайте вътрешна проверка преди 2027 г.',
    ],
  },
  {
    title: 'Прозрачност на заплащането',
    items: [
      'Проверете дали имате обективни критерии за възнагражденията.',
      'Уточнете каква информация за заплащането може да бъде поискана.',
      'Прегледайте вътрешните правила за равно заплащане.',
      'Планирайте как ще докладвате разликите във възнагражденията.',
    ],
  },
];

export default function Checklist() {
  return (
    <>
      <SEO
        title="Безплатен checklist: Готови ли сте за 2027?"
        description="Безплатен checklist с 14 неща, които трябва да проверите в трудовите договори, работното време, стажа и възнагражденията преди 2027 г."
        pathname={ROUTES.CHECKLIST}
      />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="hero__context">Безплатен материал</p>
            <h1>Готови ли сте за 2027?</h1>
            <p>
              14 неща, които трябва да проверите в трудовите договори, работното време, стажа и
              възнагражденията — още преди новите правила да влязат в сила.
            </p>
          </div>

          <div className="checklist-actions no-print">
            <button type="button" className="btn btn--ghost" onClick={() => window.print()}>
              Разпечатайте или запазете като PDF
            </button>
            <a className="btn btn--ghost" href="/checklist-2027.docx" download>
              Изтеглете Word файла
            </a>
          </div>

          <div className="checklist">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <ul className="list list--checklist">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="check-box" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="closing-note">
            <p>
              Ако искате да разберете как точно да приложите всяка от тези точки, заповядайте на
              семинара на {SITE.SEM1_DATE_SHORT}.
            </p>
            <Link className="btn btn--primary" to={registrationHref({ course: 'trudov-kodeks' })}>
              Запишете се за 28 октомври
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
