// Единствен източник на истина за всички променливи факти от 01-site-copy.md
// Не пишете hard-coded стойности в компоненти — ползвайте импортите от тук.

export const SITE = {
  // Organisation
  ORG: 'Дружество „Знание“',
  ORG_SHORT: 'Знание',
  LEGAL: 'Сдружение, основано през 1991 г. · ЕИК 000907978.',
  FOUNDED: '1991',
  ADDRESS:
    'ж.к. „Училищни“, бул. „България“ 150, сграда „21 век“, офис 513, 6300 Хасково',
  PHONE: '0878 398 920',
  PHONE_HREF: 'tel:+359878398920',
  // [ПОТВЪРДЕТЕ: имейл] — остава празен, докато не бъде потвърден
  EMAIL: '',

  // Seminar 1 — 28 October 2026
  SEM1_TITLE: 'Трудов стаж в часове и прозрачност на заплащането',
  SEM1_DATE: '28 октомври 2026 г., сряда',
  SEM1_DATE_SHORT: '28 октомври 2026 г.',
  SEM1_TIME: '9:00',
  SEM1_LECTURER: 'Теодора Дичева',
  SEM1_ZOOM: 'Онлайн в Zoom',
  SEM1_DURATION: '4 часа',

  // Seminar 2 — 30 October 2026 (ЗКПО)
  SEM2_TITLE: 'Годишното данъчно приключване на 2026 г. по ЗКПО в евро',
  SEM2_DATE: '30 октомври 2026 г., петък',
  SEM2_DATE_SHORT: '30 октомври 2026 г.',
  SEM2_TIME: '9:00 – 16:00',
  SEM2_LECTURER: 'Димитър Войнов',
  SEM2_ZOOM: 'Онлайн в Zoom',
  SEM2_DURATION: 'цял ден',
  SEM2_PRICE: 125,

  // Pricing
  PRICE: 100,
  EARLY_PRICE: 85,

  // Bank details for wire transfers
  BANK_IBAN: 'BG96STSA93000005500687',
  BANK_BIC: 'STSABGSF',

  EARLY_DEADLINE_ISO: '2026-10-20T23:59:59+03:00',
  EARLY_DEADLINE_BG: '20 октомври 2026 г.',
  // Early price switch
  // При true ранната цена се рендерира; при false се крие и в статичното HTML липсва.
  // Превключете на false и прекомпилирайте след EARLY_DEADLINE_ISO.
  EARLY_PRICE_ACTIVE: true,

  // Feature flags
  // true = Variant A (home page focuses on the 28 October seminar until 28.10.2026)
  // false = Variant B (generic home page after the seminar, until January seminars are announced)
  SHOW_SEMINAR_1: true,

  // Meta / sharing
  SITE_URL: 'https://znaniehaskovo.eu',
  DEFAULT_OG_IMAGE: '/og/znanie.png',
  SEMINAR_OG_IMAGE: '/og/seminar-28-oktomvri.png',
  SEMINAR_ZKPO_OG_IMAGE: '/og/zkpo-30-oktomvri.png',
};

// Helper: formatted price with non-breaking space before €
export function fmtPrice(amount) {
  return `${amount} €`;
}

// Helper: email href only if email is set
export function emailHref() {
  return SITE.EMAIL ? `mailto:${SITE.EMAIL}` : undefined;
}

// Helper: current year for copyright
export function currentYear() {
  return new Date().getFullYear();
}

// Seminar route slugs
export const ROUTES = {
  HOME: '/',
  SEMINAR_28_OKT: '/seminar-trudov-stazh-28-oktomvri',
  SEMINAR_ZKPO_30_OKT: '/seminar-zkpo-30-oktomvri',
  ZAPISI: '/zapisi',
  BLAGODARIM: '/blagodarim',
  ZA_NAS: '/za-nas',
  KONTAKTI: '/kontakti',
  DDFL: '/deynost/ddfl',
  DDS: '/deynost/dds',
  KORP_DANAK: '/deynost/korp-danak',
  PRIVACY: '/politika-za-poveritelnost',
  COOKIES: '/biskvitki',
  CHECKLIST: '/checklist',
};

// Registration link helpers
export function registrationHref({ group = false, course = 'trudov-kodeks' } = {}) {
  const base = `${ROUTES.ZAPISI}?course=${course}#registration-form`;
  return group ? `${ROUTES.ZAPISI}?course=${course}&group=1#registration-form` : base;
}
