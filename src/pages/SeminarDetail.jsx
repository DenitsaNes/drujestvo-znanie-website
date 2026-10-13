import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import NewsletterSignup from '../components/NewsletterSignup';
import { ROUTES, SITE } from '../content/site';

const SEMINARS = {
  ddfl: {
    title: 'Семинар: Данъци върху доходите на физическите лица (ДДФЛ)',
    h1: 'Семинар: Данъци върху доходите на физическите лица (ДДФЛ)',
    description:
      'Онлайн семинар за данъците върху доходите на физическите лица през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
  dds: {
    title: 'Семинар: ДДС в практиката на бизнеса',
    h1: 'Семинар: ДДС в практиката на бизнеса',
    description:
      'Онлайн семинар за ДДС в практиката на бизнеса през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
  'korp-danak': {
    title: 'Семинар: Корпоративен данък по ЗКПО',
    h1: 'Семинар: Корпоративен данък по ЗКПО',
    description:
      'Онлайн семинар за облагането на юридическите лица по ЗКПО през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
};

export default function SeminarDetail() {
  const { slug } = useParams();
  const seminar = SEMINARS[slug];

  if (!seminar) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Семинарът не е намерен</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={seminar.title} description={seminar.description} pathname={`${ROUTES.HOME}deynost/${slug}`} />
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <h1>{seminar.h1}</h1>
          </div>
          <p className="measure">
            Семинарът е през януари 2027 г., онлайн в Zoom, 4 часа. Датата, лекторът и програмата
            предстоят.
          </p>
          <NewsletterSignup title="Ще Ви пишем, когато обявим датата" />
        </div>
      </section>
    </>
  );
}
