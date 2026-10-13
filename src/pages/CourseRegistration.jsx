import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE, ROUTES, fmtPrice } from '../content/site';
import { calculatePrice, formatTotal } from '../content/pricing';
import { isEarlyPriceActive } from '../hooks/useEarlyPrice';

function Field({ label, children, hint }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
      {hint && <span className="field-hint">{hint}</span>}
    </div>
  );
}

function Checkbox({ label, ...props }) {
  return (
    <label className="check">
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}

const COURSES = [
  {
    id: 'trudov-kodeks',
    title: SITE.SEM1_TITLE,
    date: SITE.SEM1_DATE,
    price: SITE.PRICE,
    active: true,
  },
  {
    id: 'ddfl',
    title: 'Данъци върху доходите на физическите лица',
    date: 'януари 2027',
    price: null,
    active: false,
  },
  {
    id: 'dds',
    title: 'Данъкът върху добавената стойност в практиката на бизнеса',
    date: 'януари 2027',
    price: null,
    active: false,
  },
  {
    id: 'korp-danak',
    title: 'Облагане на юридическите лица по ЗКПО',
    date: 'януари 2027',
    price: null,
    active: false,
  },
];

function SeminarCards({ selected, onSelect }) {
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <div className="wrap">
        <div className="section__head">
          <h2>1. Изберете семинар</h2>
        </div>
        <div className="course-cards">
          {COURSES.map((course) => (
            <article
              key={course.id}
              className={`course-card ${selected === course.id ? 'is-selected' : ''} ${!course.active ? 'is-soon' : ''}`}
            >
              <div>
                <h3>{course.title}</h3>
                <p className="muted">{course.date}</p>
                {course.active ? (
                  <p className="course-card__price">{fmtPrice(course.price)}</p>
                ) : (
                  <p className="course-card__status">Дата и лектор — скоро</p>
                )}
              </div>
              {course.active ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => onSelect(course.id)}
                >
                  {selected === course.id ? 'Избран' : 'Избери'}
                </button>
              ) : (
                <span className="btn btn--ghost" aria-disabled="true">
                  Записването започва скоро
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CourseRegistration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseFromUrl = searchParams.get('course') || 'trudov-kodeks';
  const groupFromUrl = searchParams.get('group') === '1';

  const [selectedCourse, setSelectedCourse] = useState(courseFromUrl);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: groupFromUrl ? 2 : 1,
    colleagues: '',
    invoiceCompany: '',
    invoiceEik: '',
    invoiceAddress: '',
    mol: '',
    question: '',
    certificate: true,
    newsletter: false,
    privacy: false,
  });
  const [status, setStatus] = useState({ kind: null, message: '' });

  useEffect(() => {
    setSelectedCourse(courseFromUrl);
  }, [courseFromUrl]);

  const activeCourse = COURSES.find((c) => c.id === selectedCourse);
  const showColleagues = Number(formData.participants) > 1;

  const price = useMemo(
    () =>
      calculatePrice({
        participants: formData.participants,
      }),
    [formData.participants]
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSelect = (id) => {
    setSelectedCourse(id);
    const params = new URLSearchParams(searchParams);
    params.set('course', id);
    setSearchParams(params, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      setStatus({ kind: 'error', message: 'Потвърдете, че сте прочели Политиката за поверителност.' });
      return;
    }

    const payload = new URLSearchParams();
    payload.append('form-name', 'registration');
    payload.append('bot-field', '');
    payload.append('course', selectedCourse);
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('participants', String(formData.participants));
    payload.append('colleagues', showColleagues ? formData.colleagues : '');
    payload.append('invoiceCompany', formData.invoiceCompany);
    payload.append('invoiceEik', formData.invoiceEik);
    payload.append('invoiceAddress', formData.invoiceAddress);
    payload.append('mol', formData.mol);
    payload.append('question', formData.question);
    payload.append('certificate', formData.certificate ? 'yes' : 'no');
    payload.append('newsletter', formData.newsletter ? 'yes' : 'no');
    payload.append('privacy', formData.privacy ? 'yes' : 'no');
    payload.append('pricePerPerson', String(price.perPerson));
    payload.append('totalPrice', String(price.total));

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (!res.ok) throw new Error('Network error');
    } catch {
      // Continue to thank-you even if the fetch fails locally
    }

    navigate(ROUTES.BLAGODARIM, {
      state: {
        name: formData.name,
        email: formData.email,
        total: price.total,
        perPerson: price.perPerson,
        participants: price.count,
      },
    });
  };

  return (
    <>
      <SEO
        title="Записване за семинар"
        description="Запишете се за онлайн семинар на Дружество „Знание“. Крайна цена без ДДС отгоре, групови отстъпки, сертификат за участие."
        pathname={ROUTES.ZAPISI}
      />
      <SeminarCards selected={selectedCourse} onSelect={handleSelect} />
      <section className="section" id="registration-form">
        <div className="wrap">
          <div className="section__head">
            <h2>2. Вашите данни</h2>
          </div>
          {activeCourse && (
            <p className="selected-summary">
              <strong>{activeCourse.title}</strong> — {activeCourse.date}, онлайн в Zoom
            </p>
          )}
          <form name="registration" method="post" onSubmit={handleSubmit} className="registration-form">
            <input type="hidden" name="form-name" value="registration" />
            <input type="hidden" name="course" value={selectedCourse} />
            <input type="hidden" name="pricePerPerson" value={price.perPerson} />
            <input type="hidden" name="totalPrice" value={price.total} />
            <p className="hidden">
              <label>Не попълвайте: <input name="bot-field" /></label>
            </p>

            <Field label="Име и фамилия" hint="Името, с което ще влезете в Zoom.">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>
            <Field label="Имейл" hint="Тук изпращаме данните за плащане и линка.">
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
            <Field label="Телефон">
              <input
                className="input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Field>
            <Field label="Брой участници" hint="За група — посочете имената в полето отдолу.">
              <input
                className="input"
                type="number"
                name="participants"
                min="1"
                max="30"
                value={formData.participants}
                onChange={handleChange}
                required
              />
            </Field>
            {showColleagues && (
              <Field label="Имена на колегите">
                <textarea
                  className="input"
                  name="colleagues"
                  rows="3"
                  value={formData.colleagues}
                  onChange={handleChange}
                />
              </Field>
            )}
            <Field label="Данни за фактура: фирма">
              <input
                className="input"
                type="text"
                name="invoiceCompany"
                value={formData.invoiceCompany}
                onChange={handleChange}
              />
            </Field>
            <Field label="Данни за фактура: ЕИК">
              <input
                className="input"
                type="text"
                name="invoiceEik"
                value={formData.invoiceEik}
                onChange={handleChange}
              />
            </Field>
            <Field label="Данни за фактура: адрес на регистрация">
              <input
                className="input"
                type="text"
                name="invoiceAddress"
                value={formData.invoiceAddress}
                onChange={handleChange}
              />
            </Field>
            <Field label="МОЛ">
              <input
                className="input"
                type="text"
                name="mol"
                value={formData.mol}
                onChange={handleChange}
              />
            </Field>

            <Field label="Въпрос към лектора" hint="Опишете казуса си. Подбраните въпроси ще бъдат разгледани на семинара.">
              <textarea
                className="input"
                name="question"
                rows="4"
                value={formData.question}
                onChange={handleChange}
              />
            </Field>

            <div className="checks-group">
              <Checkbox
                label="Искам сертификат за участие"
                name="certificate"
                checked={formData.certificate}
                onChange={handleChange}
              />
              <Checkbox
                label="Искам да получавам имейли за следващи семинари"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
            </div>

            <div className="price-summary" aria-live="polite">
              <strong>{formatTotal(price)}</strong>
              <p className="small muted">Цената е крайна — без ДДС отгоре.</p>
            </div>

            <div className="checks-group">
              <Checkbox
                label={
                  <>
                    Прочетох <a href={ROUTES.PRIVACY}>Политиката за поверителност</a>
                  </>
                }
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
            </div>

            <p className="important">
              <strong>Важно:</strong> Мястото Ви е потвърдено, когато плащането постъпи по банков път.
              {isEarlyPriceActive() && (
                <span data-early> Ранната цена важи само при плащане до 20 октомври.</span>
              )}
            </p>

            {status.kind === 'error' && <p className="form-error">{status.message}</p>}

            <button type="submit" className="btn btn--primary">
              Изпратете заявката
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
