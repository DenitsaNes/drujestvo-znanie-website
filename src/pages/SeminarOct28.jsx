import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SeminarSlip from '../components/SeminarSlip';
import Ledger from '../components/Ledger';
import Steps from '../components/Steps';
import Faq from '../components/Faq';
import ClosingCta from '../components/ClosingCta';
import { SITE, ROUTES, registrationHref } from '../content/site';

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__context">{SITE.SEM1_DATE_SHORT}, онлайн в Zoom</p>
          <h1>Трудовият стаж в часове и прозрачността на заплащането: какво да подготвите преди 2027 г.</h1>
          <p className="hero__lead">
            Практически семинар с {SITE.SEM1_LECTURER} за работодатели, счетоводители, ТРЗ и HR
            специалисти, юристи и мениджъри.
          </p>
        </div>
        <div className="hero__actions">
          <Link className="btn btn--primary" to={registrationHref({ course: 'trudov-kodeks' })}>
            Запишете се за 28 октомври
          </Link>
          <Link className="btn btn--ghost" to={registrationHref({ group: true, course: 'trudov-kodeks' })}>
            Запишете група
          </Link>
        </div>
        <SeminarSlip />
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
          От 2027 г. работодателите трябва да прилагат нови правила за изчисляването и отчитането на
          трудовия стаж. Успоредно с това европейските правила за прозрачност на заплащането въвеждат
          изисквания за равно заплащане и обективни критерии за възнагражденията.
        </p>
        <p className="measure" style={{ marginTop: 16 }}>Ще говорим не само за това какво пише в закона, а и за това:</p>
        <ul className="list" style={{ marginTop: 12 }}>
          <li>какво означава то за работодателя;</li>
          <li>какво трябва да провери HR отделът;</li>
          <li>какво трябва да направи ТРЗ;</li>
          <li>кои вътрешни правила и процеси да прегледате.</li>
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
            <h3>Част 1. Новото изчисляване на трудовия стаж</h3>
            <ul className="list" style={{ marginTop: 12 }}>
              <li>изчисляване на стажа в часове, дни, месеци и години</li>
              <li>как се отчита действително положеният труд</li>
              <li>работа на непълно работно време</li>
              <li>повече от един трудов договор</li>
              <li>сумирано изчисляване на работното време</li>
              <li>заварени случаи</li>
              <li>промени при документирането и вписването на стажа</li>
              <li>практически казуси</li>
            </ul>
          </div>
          <div>
            <h3>Част 2. Прозрачност на заплащането</h3>
            <ul className="list" style={{ marginTop: 12 }}>
              <li>равно заплащане за равен труд или за труд с равна стойност</li>
              <li>какви критерии трябва да използва работодателят</li>
              <li>каква информация за заплащането може да бъде поискана</li>
              <li>какво трябва да знаят HR и ръководителите</li>
              <li>как се подготвят вътрешните правила</li>
              <li>задълженията на работодателите според приложимите изисквания</li>
              <li>докладване и разлики в заплащането</li>
              <li>коригиращи мерки и практически стъпки за организацията</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <h3>Част 3. Отговори на Вашите въпроси</h3>
          <p className="measure" style={{ marginTop: 8 }}>
            Включително подбраните въпроси, изпратени предварително при записването.
          </p>
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
        <ul className="list">
          <li>да обясните какво точно се променя;</li>
          <li>да прецените кои процеси във Вашата организация трябва да се прегледат;</li>
          <li>да откриете проблемните места навреме;</li>
          <li>да работите с готов checklist за подготовка;</li>
          <li>да прецените какво да попитате HR, ТРЗ или ръководството;</li>
          <li>да започнете подготовката преди 2027 г.</li>
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
        <ul className="list">
          <li><strong>Счетоводители и ТРЗ</strong> — работите с трудови договори, възнаграждения и стаж.</li>
          <li><strong>HR специалисти</strong> — ще прилагате промените всеки ден.</li>
          <li><strong>Работодатели и управители</strong> — отговаряте за организацията.</li>
          <li><strong>Юристи</strong> — работите с трудово право.</li>
          <li><strong>Мениджъри</strong> — вземате решения за служители и възнаграждения.</li>
          <li><strong>HR и бизнес консултанти</strong> — помагате на работодатели да се подготвят.</li>
        </ul>
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
          Един човек може да научи правилата. Екипът може да подготви организацията. Ако при Вас HR,
          ТРЗ, счетоводството и ръководството работят по тези въпроси, можете да ги запишете заедно.
        </p>
        <Ledger />
        <div className="actions" style={{ marginTop: 28 }}>
          <Link className="btn btn--primary" to={registrationHref({ group: true, course: 'trudov-kodeks' })}>
            Запишете група
          </Link>
        </div>
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

export default function SeminarOct28() {
  return (
    <>
      <SEO
        title="Семинар: трудов стаж в часове и прозрачност на заплащането — 28.10.2026"
        description="Практически онлайн семинар с Теодора Дичева на 28 октомври 2026 г.: изчисляване на трудовия стаж в часове от 2027 г. и новите правила за прозрачност на заплащането. 100 €."
        pathname={ROUTES.SEMINAR_28_OKT}
        image={SITE.SEMINAR_OG_IMAGE}
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
