import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SeminarSlipZkpo from '../components/SeminarSlipZkpo';
import Ledger from '../components/Ledger';
import Steps from '../components/Steps';
import { SITE, ROUTES, registrationHref } from '../content/site';

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__context">{SITE.SEM2_DATE_SHORT}, онлайн в Zoom</p>
          <h1>Подгответе годишното данъчно приключване на 2026 г. по ЗКПО в условията на еврото.</h1>
          <p className="hero__lead">
            Цял ден практически семинар с {SITE.SEM2_LECTURER} за счетоводители, финансови
            специалисти и управители. Ще минем през данъчните разлики, амортизациите, дивидентите,
            промените в ЗКПО и съдебната практика.
          </p>
        </div>
        <div className="hero__actions">
          <Link className="btn btn--primary" to={registrationHref({ course: 'zkpo' })}>
            Запишете се за 30 октомври
          </Link>
          <Link className="btn btn--ghost" to={`${ROUTES.SEMINAR_ZKPO_30_OKT}#programa`}>
            Вижте програмата
          </Link>
        </div>
        <SeminarSlipZkpo />
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>Защо сега</h2>
        </div>
        <p className="measure">
          Годишното данъчно приключване на 2026 г. е първото, което ще се прави в условията на
          еврото. Това засяга преобразуването на финансовия резултат, данъчните разлики,
          амортизациите и документирането на всички суми.
        </p>
        <p className="measure" style={{ marginTop: 16 }}>
          През 2026 г. влязоха в сила и нови облекчения, а през 2027 г. се очакват нови промени. На
          семинара ще видите какво да направите още сега, за да не се налагат корекции след приключването.
        </p>
        <ul className="list list--bulleted" style={{ marginTop: 12 }}>
          <li>какво означава еврото за годишното приключване;</li>
          <li>как да преобразувате правилно финансовия резултат;</li>
          <li>кое от новите облекчения да приложите;</li>
          <li>какво да подготвите предварително в документите.</li>
        </ul>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section className="section" id="programa">
      <div className="wrap">
        <div className="section__head">
          <h2>Програма</h2>
        </div>
        <div className="two">
          <div>
            <h3>Част 1. Подготовка за годишното данъчно приключване на 2026 г. в евро</h3>
            <ul className="list list--bulleted" style={{ marginTop: 12 }}>
              <li>ефект от въвеждането на еврото върху годишното приключване</li>
              <li>данъчни постоянни разлики</li>
              <li>данъчни временни разлики</li>
              <li>други суми, с които се преобразува финансовият резултат</li>
              <li>данъчен амортизационен план</li>
              <li>данъчни загуби</li>
              <li>дивиденти</li>
              <li>данъци върху разходите</li>
              <li>други</li>
            </ul>
          </div>
          <div>
            <h3>Част 2. Промени в ЗКПО през 2026 г.</h3>
            <ul className="list list--bulleted" style={{ marginTop: 12 }}>
              <li>данъчно облекчение, свързано с пазар за растеж</li>
              <li>регламентиране за целите на ЗКПО на валутния курс за чуждестранна валута</li>
              <li>редакционни промени в глобалния данък</li>
              <li>ускорена данъчна амортизация за електрически автомобили</li>
              <li>данъчно облекчение за научноизследователска и развойна дейност</li>
              <li>други</li>
            </ul>
          </div>
        </div>
        <div className="two" style={{ marginTop: 40 }}>
          <div>
            <h3>Част 3. Очаквани промени в ЗКПО през 2027 г.</h3>
            <p className="measure" style={{ marginTop: 8 }}>
              Какво предстои и как да се подготвите предварително.
            </p>
          </div>
          <div>
            <h3>Част 4. Данъчна и съдебна практика</h3>
            <p className="measure" style={{ marginTop: 8 }}>
              Актуална практика по прилагането на ЗКПО и отговори на въпроси.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AfterSeminar() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>След семинара ще можете</h2>
        </div>
        <ul className="list list--bulleted">
          <li>правилно да преобразувате финансовия резултат за 2026 г.;</li>
          <li>да приложите новите данъчни облекчения;</li>
          <li>да отразите ефекта от еврото в годишното приключване;</li>
          <li>да проверите данъчния амортизационен план и загубите;</li>
          <li>да отразите дивидентите и данъците върху разходите;</li>
          <li>да се подготвите за очакваните промени през 2027 г.</li>
        </ul>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>За кого е</h2>
        </div>
        <ul className="list list--bulleted">
          <li><strong>Счетоводители</strong> — подготвяте годишното приключване и данъчната декларация.</li>
          <li><strong>Финансови директори</strong> — отговаряте за преобразуването на резултата.</li>
          <li><strong>Данъчни специалисти</strong> — работите с данъчните разлики и облекченията.</li>
          <li><strong>Управители и собственици</strong> — вземате решения за данъчната политика.</li>
          <li><strong>Юристи</strong> — работите с данъчната и съдебната практика.</li>
        </ul>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="section section--center">
      <div className="wrap">
        <div className="section__head">
          <h2>Не само лекция</h2>
        </div>
        <div className="two">
          <div className="ready-pack-col">
            <h3>С участието получавате</h3>
            <ul className="list">
              <li>Цял ден практическо обучение с {SITE.SEM2_LECTURER}</li>
              <li>Учебни материали и презентация</li>
              <li>Сертификат за участие</li>
              <li>Време за Вашите въпроси по време на семинара</li>
            </ul>
          </div>
          <div className="ready-pack-col">
            <h3>2026 READY PACK</h3>
            <p className="pack-intro">Практически материали, които ползвате и след семинара:</p>
            <ul className="list">
              <li>
                <strong>Работни материали</strong> — структура на годишното приключване и
                преобразуване на финансовия резултат.
              </li>
              <li>
                <strong>Практически казуси</strong> — данъчни разлики, амортизации, дивиденти и
                данъци върху разходите.
              </li>
              <li>
                <strong>Актуализация</strong> — при съществени промени в разгледаните правила ще Ви
                изпратим обновена информация.
              </li>
              <li>
                <strong>Въпрос към лектора</strong> — опишете казуса си при записването. Част от
                въпросите ще бъдат разгледани на семинара.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lecturer() {
  return (
    <section className="section section--center" id="lektor">
      <div className="wrap">
        <div className="section__head">
          <h2>Лекторът</h2>
        </div>
        <div className="lecturer lecturer--center">
          <img
            className="portrait"
            src="/dimitar-voynov.jpg"
            alt={`${SITE.SEM2_LECTURER}, лектор`}
            width="800"
            height="1000"
            loading="lazy"
          />
          <div>
            <h3 style={{ fontSize: '1.75rem' }}>{SITE.SEM2_LECTURER}</h3>
            <p className="lecturer__role">Асоцииран експерт по ЗКПО, данъчен консултант</p>
            <p className="measure">
              Димитър Войнов има дългогодишен опит в данъчното облагане по ЗКПО — данъчни
              амортизации, данъчни постоянни и временни разлики, преобразуване на финансовия
              резултат, данъчно третиране на разходи и сделки с търговски дружества.
            </p>
            <p className="measure">
              От 2000 до 2011 г. е експерт в дирекция „Данъчна политика“ в Министерство на
              финансите, където участва в разработването на ЗКПО и в указанията по прилагането му.
              От 2011 до 2016 г. преподава в НАП. От 2016 г. работи като лектор, данъчен експерт и
              консултант.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>Идвате с колеги?</h2>
        </div>
        <p className="measure">
          Годишното приключване засяга счетоводството, финансите и ръководството. Ако работите в
          екип, записването заедно помага всички да минат по еднакъв ред.
        </p>
        <Ledger price={SITE.SEM2_PRICE} earlyActive={false} />
        <div className="actions" style={{ marginTop: 28 }}>
          <Link className="btn btn--primary" to={registrationHref({ group: true, course: 'zkpo' })}>
            Запишете група
          </Link>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    question: 'Ще има ли запис?',
    answer:
      'Не. Семинарът е на живо, за да можете да задавате въпроси. Материалите и презентацията получавате след това.',
  },
  {
    question: 'Ще получа ли фактура?',
    answer:
      'Да, издаваме документ за платената такса на името на Вашата фирма. Във формата има поле за данни за фактура.',
  },
  {
    question: 'Мога ли да задам въпрос предварително?',
    answer:
      'Да. Във формата за записване има поле „Въпрос към лектора“. Подбраните въпроси ще бъдат разгледани на семинара.',
  },
  {
    question: 'Какво ми трябва, за да се включа?',
    answer:
      'Компютър или телефон с интернет и Zoom. Влезте с името, с което сте се записали.',
  },
  {
    question: 'Мога ли да прехвърля участието на колега?',
    answer: `Да, можете да прехвърлите участието без доплащане. Пишете ни${SITE.EMAIL ? ` на ${SITE.EMAIL}` : ''} до деня преди семинара.`,
  },
  {
    question: 'Подходящ ли е за малки фирми?',
    answer:
      'Да. Ще разгледаме както общите правила, така и случаите, които засягат по-малките организации.',
  },
];

function Faq() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>Въпроси</h2>
        </div>
        <div className="faq">
          {FAQ.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="closing">
      <div className="wrap">
        <h2>Годишното приключване идва, независимо дали сте готови</h2>
        <p>Подгответе се на 30 октомври.</p>
        <Link className="btn btn--primary" to={registrationHref({ course: 'zkpo' })}>
          Запишете се за 30 октомври
        </Link>
      </div>
    </section>
  );
}

export default function SeminarZkpo() {
  return (
    <>
      <SEO
        title="Семинар по ЗКПО: годишното приключване на 2026 г. в евро — 30.10.2026"
        description="Практически онлайн семинар с Димитър Войнов на 30 октомври 2026 г. за годишното данъчно приключване по ЗКПО, промените през 2026 г. и очакваните промени през 2027 г. 125 €."
        pathname={ROUTES.SEMINAR_ZKPO_30_OKT}
        image={SITE.SEMINAR_ZKPO_OG_IMAGE}
      />
      <Hero />
      <WhyNow />
      <Program />
      <AfterSeminar />
      <Audience />
      <WhatYouGet />
      <Lecturer />
      <Groups />
      <Steps />
      <Faq />
      <ClosingCta />
    </>
  );
}
