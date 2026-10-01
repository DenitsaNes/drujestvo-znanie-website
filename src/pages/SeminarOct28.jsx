import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BONUSES = [
  {
    title: 'CHECKLIST „ГОТОВИ ЛИ СМЕ ЗА 2027?"',
    items: [
      'трудови договори',
      'работно време',
      'трудов стаж',
      'вътрешни правила',
      'възнаграждения',
      'критерии за заплащане',
      'прозрачност',
      'документи и процедури',
    ],
  },
  {
    title: 'PRACTICAL PAY TRANSPARENCY SELF-AUDIT',
    text: 'Самооценка на готовността на Вашата организация за новите изисквания за прозрачност на възнагражденията. Отговорете на въпросите и разберете кои области трябва да бъдат прегледани.',
  },
  {
    title: 'ПРАКТИЧЕСКИ КАЗУСИ',
    items: [
      'непълно работно време',
      'повече от един трудов договор',
      'изчисляване на трудов стаж',
      'възнаграждения',
      'вътрешни правила',
      'прозрачност на заплащането',
    ],
  },
  {
    title: '2027 UPDATE',
    text: 'Следете промените и след семинара. При съществени промени в разглежданата нормативна рамка участниците ще получат актуализирана информация съобразно условията на организатора.',
  },
  {
    title: 'ВЪПРОС КЪМ ЛЕКТОРА',
    text: 'Имате конкретен казус? Оставете въпроса си при регистрацията. Част от въпросите ще бъдат избрани за разглеждане по време на обучението.',
  },
];

const TOPICS = [
  {
    number: '01',
    title: 'НОВАТА КОНЦЕПЦИЯ ЗА ИЗЧИСЛЯВАНЕ НА ТРУДОВИЯ СТАЖ',
    items: [
      'изчисляването на трудовия стаж в часове, дни, месеци и години',
      'как се отчита действително положеният труд',
      'работа на непълно работно време',
      'повече от един трудов договор',
      'сумирано изчисляване на работното време',
      'практически казуси',
      'заварени случаи',
      'промени при документирането и вписването на трудовия стаж',
    ],
  },
  {
    number: '02',
    title: 'ПРОЗРАЧНОСТ НА ЗАПЛАЩАНЕТО',
    items: [
      'какво означава равно заплащане за равен труд или труд с равна стойност',
      'какви критерии трябва да използва работодателят',
      'каква информация относно възнаграждението може да бъде изисквана',
      'какво трябва да знаят HR и ръководителите',
      'как се подготвят вътрешните правила',
      'задълженията на работодателите според приложимите изисквания',
      'докладване и разлики в заплащането',
      'коригиращи мерки',
      'практически действия за организацията',
    ],
  },
];

const AUDIENCES = [
  { emoji: '👩‍💼', title: 'HR СПЕЦИАЛИСТИ', text: 'За хората, които ще трябва да прилагат промените ежедневно.' },
  { emoji: '📊', title: 'ТРЗ И СЧЕТОВОДИТЕЛИ', text: 'За тези, които работят с трудови договори, възнаграждения и стаж.' },
  { emoji: '🏢', title: 'РАБОТОДАТЕЛИ И УПРАВИТЕЛИ', text: 'За тези, които носят отговорност за организацията.' },
  { emoji: '⚖️', title: 'ЮРИСТИ', text: 'За професионалисти, които работят с трудово право.' },
  { emoji: '📈', title: 'МЕНИДЖЪРИ', text: 'За хора, които вземат решения относно служители и възнаграждения.' },
  { emoji: '🤝', title: 'HR И БИЗНЕС КОНСУЛТАНТИ', text: 'За професионалисти, които подпомагат работодатели и организации.' },
];

const STICKY_CTA = '/zapisi?course=trudov-kodeks#registration-form';

function SeminarOct28() {
  return (
    <>
      <SEO
        title="Семинар: Трудов стаж и прозрачност на заплащането"
        description="Практически семинар с Теодора Дичева на 28 октомври 2026 в Хасково. Подгответе организацията си за промените в трудовото законодателство през 2027."
        pathname="/seminar-trudovo-zakonodatelstvo-28-oktomvri"
      />
      <article className="seminar-landing">
      <div className="seminar-sticky-bar">
        <div className="container">
          <span className="seminar-sticky-bar__info">
            28 октомври 2026 • Хасково
          </span>
          <Link to={STICKY_CTA} className="button">
            Запиши се
          </Link>
        </div>
      </div>
      <div className="seminar-sticky-spacer" aria-hidden="true"></div>

      {/* HERO */}
      <section className="seminar-hero">
        <div className="container">
          <div className="seminar-hero__badge">⚠️ 2027 НЕ Е ДАЛЕЧЕ</div>
          <h1 className="seminar-hero__title">
            НОВИТЕ ПРАВИЛА ЗА ТРУДОВИЯ СТАЖ И ПРОЗРАЧНОСТТА НА ЗАПЛАЩАНЕТО
          </h1>
          <p className="seminar-hero__subtitle">
            Какво трябва да знае всеки работодател, HR специалист, ТРЗ експерт,
            счетоводител и мениджър преди 2027 г.?
          </p>
          <p className="seminar-hero__speaker">
            Практически семинар с <strong>Теодора Дичева</strong>
          </p>
          <p className="seminar-hero__meta">28 октомври 2026 г. • Хасково</p>
          <Link to={STICKY_CTA} className="button button--huge seminar-hero__cta">
            ЗАПИШИ СЕ ЗА СЕМИНАРА
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="section seminar-section">
        <div className="container seminar-intro">
          <h2 className="section-title">Законодателството се променя.</h2>
          <p className="seminar-lead">
            Въпросът е дали Вашата организация ще бъде готова.
          </p>
          <p className="seminar-text">
            На семинара ще разгледаме предстоящите промени, новата концепция за
            изчисляване на трудовия стаж и европейските изисквания за прозрачност и
            равно заплащане. Ще говорим не само за „какво пише в закона“, а за:
          </p>
          <ul className="seminar-list seminar-list--intro">
            <li>Какво означава това за работодателя?</li>
            <li>Какво трябва да провери HR отделът?</li>
            <li>Какво трябва да направи ТРЗ?</li>
            <li>Какви вътрешни правила и процеси трябва да бъдат прегледани?</li>
          </ul>
        </div>
      </section>

      {/* BONUSES */}
      <section className="section seminar-section seminar-section--soft">
        <div className="container">
          <h2 className="section-title seminar-title--centered">
            🎁 НЕ ПОЛУЧАВАТЕ САМО СЕМИНАР.
            <br />
            <span className="seminar-title__highlight">Получавате „2027 READY PACK“</span>
          </h2>
          <p className="seminar-subtitle">
            С регистрацията получавате допълнителни практически материали, които можете
            да използвате и след обучението.
          </p>

          <div className="seminar-bonuses">
            {BONUSES.map((bonus, index) => (
              <div key={index} className="seminar-bonus">
                <div className="seminar-bonus__number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="seminar-bonus__title">{bonus.title}</h3>
                {bonus.text && <p className="seminar-bonus__text">{bonus.text}</p>}
                {bonus.items && (
                  <ul className="seminar-bonus__list">
                    {bonus.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section seminar-section">
        <div className="container seminar-why">
          <h2 className="section-title seminar-title--centered">ЗАЩО ТОВА ОБУЧЕНИЕ Е ВАЖНО?</h2>
          <p className="seminar-text">
            От 2027 г. работодателите ще трябва да се съобразяват с нови правила и
            изисквания, свързани с изчисляването и отчитането на трудовия стаж.
          </p>
          <p className="seminar-text">
            Паралелно с това европейската рамка за прозрачност на възнагражденията поставя
            нови изисквания относно равното заплащане, прозрачността и обективните
            критерии за възнаграждение.
          </p>
          <p className="seminar-text seminar-text--bold">
            Не чакайте промените да стигнат до бюрото Ви като проблем.
            <br />
            Подгответе се предварително.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section seminar-section seminar-section--soft">
        <div className="container">
          <h2 className="section-title seminar-title--centered">
            ДВЕ ГОЛЕМИ ТЕМИ. ЕДНО ПРАКТИЧЕСКО ОБУЧЕНИЕ.
          </h2>
          <div className="seminar-topics">
            {TOPICS.map((topic) => (
              <div key={topic.number} className="seminar-topic">
                <div className="seminar-topic__header">
                  <span className="seminar-topic__number">{topic.number}</span>
                  <h3 className="seminar-topic__title">{topic.title}</h3>
                </div>
                <ul className="seminar-topic__list">
                  {topic.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER */}
      <section className="section seminar-section">
        <div className="container seminar-after">
          <h2 className="section-title seminar-title--centered">
            КАКВО ЩЕ МОЖЕТЕ ДА НАПРАВИТЕ СЛЕД СЕМИНАРА?
          </h2>
          <p className="seminar-text seminar-text--centered">
            Не просто: „Чух какви са промените.“
          </p>
          <ul className="seminar-list seminar-list--check">
            <li>Да знаете какво се променя</li>
            <li>Да знаете кои процеси във Вашата организация трябва да бъдат прегледани</li>
            <li>Да идентифицирате потенциалните проблемни области</li>
            <li>Да имате практически checklist за подготовка</li>
            <li>Да знаете какви въпроси да зададете на HR/ТРЗ/ръководството</li>
            <li>Да можете да започнете подготовката преди 2027 г.</li>
          </ul>
        </div>
      </section>

      {/* SPEAKER */}
      <section className="section seminar-section seminar-section--soft">
        <div className="container seminar-speaker">
          <div className="seminar-speaker__image">
            <span>Теодора Дичева</span>
          </div>
          <div className="seminar-speaker__info">
            <h2 className="section-title">👩‍⚖️ ВАШИЯТ ЛЕКТОР</h2>
            <h3 className="seminar-speaker__name">ТЕОДОРА ДИЧЕВА</h3>
            <p className="seminar-speaker__role">Юрист • експерт по трудово законодателство</p>
            <p className="seminar-text">
              Теодора Дичева е юрист с дългогодишен професионален опит в областта на
              трудовото законодателство и инспектирането на труда.
            </p>
            <p className="seminar-text">
              В продължение на години тя работи в ИА „Главна инспекция по труда“,
              включително като директор на правната дирекция.
            </p>
            <p className="seminar-text">
              Автор е на множество практически материали, коментари, сборници и
              наръчници в областта на трудовото законодателство.
            </p>
            <p className="seminar-text seminar-text--bold">
              Научете не само какво се променя, а как да го приложите на практика.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section seminar-section">
        <div className="container">
          <h2 className="section-title seminar-title--centered">ЗА КОГО Е СЕМИНАРЪТ?</h2>
          <div className="seminar-audiences">
            {AUDIENCES.map((audience, index) => (
              <div key={index} className="seminar-audience">
                <span className="seminar-audience__emoji">{audience.emoji}</span>
                <h3 className="seminar-audience__title">{audience.title}</h3>
                <p className="seminar-audience__text">{audience.text}</p>
              </div>
            ))}
          </div>

          <div className="seminar-small-firm">
            <h3>„АМИ АКО МОЯТА ФИРМА Е МАЛКА?“</h3>
            <p className="seminar-text">
              Именно затова трябва да знаете какви правила са приложими към Вашата
              организация. Размерът на работодателя, структурата на организацията и
              конкретните процеси могат да имат значение за приложимите задължения. По
              време на семинара ще разгледаме тези различия практически.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="section seminar-section seminar-section--soft">
        <div className="container seminar-outcome">
          <h2 className="section-title seminar-title--centered">
            🔥 НЕ ИДВАТЕ САМО ДА СЛУШАТЕ.
            <br />
            ИДВАТЕ ДА СИ ТРЪГНЕТЕ ПОДГОТВЕНИ.
          </h2>
          <p className="seminar-text seminar-text--centered">
            На 28 октомври ще имате възможност да:
          </p>
          <div className="seminar-steps">
            <span>ЧУЕТЕ</span>
            <span>→</span>
            <span>РАЗБЕРЕТЕ</span>
            <span>→</span>
            <span>ПРОВЕРИТЕ</span>
            <span>→</span>
            <span>ПЛАНИРАТЕ</span>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="section seminar-section">
        <div className="container seminar-package">
          <h2 className="section-title seminar-title--centered">🎁 КАКВО ПОЛУЧАВАТЕ?</h2>
          <div className="seminar-package__grid">
            <div className="seminar-package__block">
              <h3>ОСНОВЕН ПАКЕТ</h3>
              <ul className="seminar-list seminar-list--check">
                <li>Практическо обучение с Теодора Дичева</li>
                <li>Учебни материали</li>
                <li>Сертификат за участие</li>
                <li>Възможност за задаване на въпроси</li>
                <li>Практически казуси</li>
              </ul>
            </div>
            <div className="seminar-package__block">
              <h3>+ 2027 READY PACK</h3>
              <ul className="seminar-list seminar-list--check">
                <li>„Готови ли сме за 2027?“ Checklist</li>
                <li>Pay Transparency Self-Audit</li>
                <li>Практически казуси</li>
                <li>2027 Update</li>
                <li>Възможност за предварителен въпрос към лектора</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP */}
      <section className="section seminar-section seminar-section--soft">
        <div className="container seminar-group">
          <h2 className="section-title seminar-title--centered">👥 ИДВАТЕ С КОЛЕГИ?</h2>
          <p className="seminar-text seminar-text--centered">
            Направете подготовката екипна. Ако във Вашата организация работят HR, ТРЗ,
            счетоводство и ръководители, разгледайте възможността за групово участие.
          </p>
          <p className="seminar-text seminar-text--bold seminar-text--centered">
            Един човек може да научи правилата.
            <br />
            Екипът може да подготви организацията.
          </p>
          <Link to="/kontakti" className="button button--large">
            ЗАПИТВАНЕ ЗА ГРУПОВО УЧАСТИЕ
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section seminar-section seminar-cta">
        <div className="container">
          <p className="seminar-cta__date">📅 28 ОКТОМВРИ 2026</p>
          <h2 className="seminar-cta__title">
            ДЕНЯТ, В КОЙТО ЗАПОЧВА ВАШАТА ПОДГОТОВКА ЗА 2027.
          </h2>
          <p className="seminar-cta__speaker">Теодора Дичева</p>
          <p className="seminar-cta__location">Хасково</p>
          <Link to={STICKY_CTA} className="button button--huge">
            ЗАПИШИ СЕ СЕГА
          </Link>

          <div className="seminar-question">
            <h3>⏳ НЕ ОТЛАГАЙТЕ ПОДГОТОВКАТА</h3>
            <p className="seminar-text seminar-text--centered">
              2027 ще дойде независимо дали организацията Ви е готова.
            </p>
            <p className="seminar-text seminar-text--bold seminar-text--centered">
              Въпросът е: КОГА ЩЕ ЗАПОЧНЕТЕ?
            </p>
            <Link to={STICKY_CTA} className="button button--large">
              ИСКАМ ДА СЕ ПОДГОТВЯ ЗА 2027 →
            </Link>
          </div>

          <div className="seminar-question">
            <h3>ИМАТЕ ВЪПРОС?</h3>
            <p className="seminar-text seminar-text--centered">
              Оставете Вашия въпрос или конкретен казус при регистрацията. Ще използваме
              подбраните въпроси, за да направим обучението максимално практически
              ориентирано.
            </p>
          </div>
        </div>
      </section>
      </article>
    </>
  );
}

export default SeminarOct28;
