import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SeminarSlip from '../components/SeminarSlip';
import Ledger from '../components/Ledger';
import Steps from '../components/Steps';
import SeminarRows from '../components/SeminarRows';
import NewsletterSignup from '../components/NewsletterSignup';
import Faq from '../components/Faq';
import ClosingCta from '../components/ClosingCta';
import { SITE, ROUTES, registrationHref } from '../content/site';

function HeroA() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div>
          <p className="hero__context">Онлайн семинар за счетоводители, ТРЗ и HR специалисти</p>
          <h1>От 2027 г. трудовият стаж се смята в часове. Подгответе се на 28 октомври.</h1>
          <p className="hero__lead">
            Четири часа с {SITE.SEM1_LECTURER} — юрист, дългогодишен служител на ИА „Главна инспекция по труда“
            и бивш директор на нейната правна дирекция. Ще видите какво се променя при трудовия стаж и при
            прозрачността на заплащането и какво да подготвите в документите си още сега.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" to={registrationHref({ course: 'trudov-kodeks' })}>
              Запишете се за 28 октомври
            </Link>
            <Link className="btn btn--ghost" to={`${ROUTES.SEMINAR_28_OKT}#programa`}>
              Вижте програмата
            </Link>
          </div>
        </div>
        <SeminarSlip />
      </div>
    </section>
  );
}

function HeroB() {
  return (
    <section className="hero">
      <div className="wrap hero__grid" style={{ gridTemplateColumns: '1fr' }}>
        <div>
          <p className="hero__context">Онлайн семинари за счетоводители, ТРЗ и HR специалисти</p>
          <h1>Практически семинари по данъчно и трудово законодателство</h1>
          <p className="hero__lead">
            Онлайн семинари за счетоводители, ТРЗ и HR специалисти с лектори, които познават практиката.
            Следващите са през януари 2027.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" to={`${ROUTES.HOME}#yanuari`}>
              Вижте семинарите за януари
            </Link>
            <Link className="btn btn--ghost" to={`${ROUTES.HOME}#newsletter`}>
              Абонирайте се за новините
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatChanges() {
  return (
    <section className="section" id="seminari">
      <div className="wrap">
        <div className="section__head">
          <h2>Две промени, които засягат всяко ТРЗ</h2>
        </div>
        <div className="two">
          <div>
            <h3>Трудовият стаж в часове</h3>
            <p className="measure">
              Стажът вече няма да се смята само в дни. Това променя сметките при непълно работно време,
              при повече от един трудов договор и при сумирано отчитане на работното време — и начина, по
              който стажът се документира.
            </p>
          </div>
          <div>
            <h3>Прозрачност на заплащането</h3>
            <p className="measure">
              Европейските правила за равно заплащане изискват обективни критерии за възнагражденията,
              информация за заплащането при поискване и вътрешни правила, които издържат на проверка.
            </p>
          </div>
        </div>
        <Link className="textlink" to={`${ROUTES.SEMINAR_28_OKT}#programa`}>
          Вижте цялата програма
        </Link>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>Не само лекция</h2>
        </div>
        <div className="two">
          <div>
            <h3>С участието получавате</h3>
            <ul className="list" style={{ marginTop: 16 }}>
              <li>Четири часа практическо обучение с {SITE.SEM1_LECTURER}</li>
              <li>Учебни материали</li>
              <li>Сертификат за участие</li>
              <li>Време за Вашите въпроси по време на семинара</li>
            </ul>
          </div>
          <div>
            <h3>2027 READY PACK</h3>
            <p className="pack-intro">Практически материали, които ползвате и след семинара:</p>
            <ul className="list" style={{ marginTop: 12 }}>
              <li>
                <strong>Checklist „Готови ли сме за 2027?“</strong> — трудови договори, работно време,
                стаж, вътрешни правила, възнаграждения и документи.
              </li>
              <li>
                <strong>Самооценка за прозрачност на заплащането</strong> — въпроси, които показват кои
                области в организацията трябва да се прегледат.
              </li>
              <li>
                <strong>Практически казуси</strong> — непълно работно време, повече от един договор,
                изчисляване на стажа, възнаграждения.
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
    <section className="section" id="lektor">
      <div className="wrap">
        <div className="section__head">
          <h2>Лекторът</h2>
        </div>
        <div className="lecturer">
          <div className="portrait" role="img" aria-label={`${SITE.SEM1_LECTURER}, лектор`}>
            Снимка на {SITE.SEM1_LECTURER}
            <br />
            4:5, мин. 800×1000 px
          </div>
          <div>
            <h3 style={{ fontSize: '1.75rem' }}>{SITE.SEM1_LECTURER}</h3>
            <p className="lecturer__role">Юрист, експерт по трудово законодателство</p>
            <p className="measure">
              {SITE.SEM1_LECTURER} има дългогодишен опит в трудовото право и инспектирането на труда.
              Години наред е работила в ИА „Главна инспекция по труда“, включително като директор на
              правната дирекция. Автор е на множество практически материали, коментари, сборници и
              наръчници по трудово законодателство.
            </p>
            <p className="measure">
              На семинара ще чуете не само какво пише в закона, но и как да го приложите в своята работа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section className="section" id="ceni">
      <div className="wrap">
        <div className="section__head">
          <h2>Цени</h2>
        </div>
        <Ledger />
        <div className="actions" style={{ marginTop: 28 }}>
          <Link className="btn btn--primary" to={registrationHref({ course: 'trudov-kodeks' })}>
            Запишете се
          </Link>
          <Link className="btn btn--ghost" to={registrationHref({ group: true, course: 'trudov-kodeks' })}>
            Запишете група
          </Link>
        </div>
      </div>
    </section>
  );
}

function Upcoming() {
  return (
    <section className="section" id="yanuari">
      <div className="wrap">
        <div className="section__head">
          <h2>Следващите семинари — януари 2027</h2>
        </div>
        <SeminarRows />
        <div id="newsletter">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Семинар „Трудов стаж в часове от 2027“ — 28 октомври"
        description="Онлайн семинар с Теодора Дичева за счетоводители, ТРЗ и HR: трудовият стаж в часове от 2027 г. и прозрачност на заплащането. 28 октомври, Zoom, 100 €."
        pathname={ROUTES.HOME}
        image={SITE.SEMINAR_OG_IMAGE}
      />
      {SITE.SHOW_SEMINAR_1 ? <HeroA /> : <HeroB />}
      {SITE.SHOW_SEMINAR_1 && <WhatChanges />}
      {SITE.SHOW_SEMINAR_1 && <WhatYouGet />}
      {SITE.SHOW_SEMINAR_1 && <Lecturer />}
      {SITE.SHOW_SEMINAR_1 && <Prices />}
      {SITE.SHOW_SEMINAR_1 && <Steps />}
      <Upcoming />
      {SITE.SHOW_SEMINAR_1 && <Faq />}
      {SITE.SHOW_SEMINAR_1 && <ClosingCta />}
    </>
  );
}
