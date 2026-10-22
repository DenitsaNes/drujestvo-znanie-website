import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const SITE_URL = 'https://znaniehaskovo.eu';
const DEFAULT_OG = '/og/znanie.png';
const SEMINAR_OG = '/og/seminar-28-oktomvri.png';
const ZKPO_OG = '/og/zkpo-30-oktomvri.png';

const routes = [
  {
    path: '/',
    title: 'Семинари за счетоводители, ТРЗ и HR — Дружество „Знание“',
    description:
      'Практически онлайн семинари с лектори от практиката: трудовият стаж в часове от 2027 г. на 28 октомври и годишното данъчно приключване по ЗКПО на 30 октомври.',
    image: SEMINAR_OG,
  },
  {
    path: '/seminar-trudov-stazh-28-oktomvri',
    title: 'Семинар: трудов стаж в часове и прозрачност на заплащането — 28.10.2026',
    description:
      'Практически онлайн семинар с Теодора Дичева на 28 октомври 2026 г.: изчисляване на трудовия стаж в часове от 2027 г. и новите правила за прозрачност на заплащането. 100 €.',
    image: SEMINAR_OG,
  },
  {
    path: '/seminar-zkpo-30-oktomvri',
    title: 'Семинар по ЗКПО: годишното приключване на 2026 г. в евро — 30.10.2026',
    description:
      'Практически онлайн семинар с Димитър Войнов на 30 октомври 2026 г. за годишното данъчно приключване по ЗКПО, промените през 2026 г. и очакваните промени през 2027 г. 125 €.',
    image: ZKPO_OG,
  },
  {
    path: '/zapisi',
    title: 'Записване за семинар',
    description:
      'Запишете се за онлайн семинар на Дружество „Знание“. Сертификат за участие.',
  },
  {
    path: '/blagodarim',
    title: 'Благодарим за записването',
    description: 'Благодарим за записването. Остава плащането по банков път, за да бъде потвърдено мястото Ви.',
    noindex: true,
  },
  {
    path: '/za-nas',
    title: 'За нас — Дружество „Знание“, Хасково',
    description:
      'Дружество „Знание“ е сдружение от Хасково, основано през 1991 г. Организираме практически семинари по трудово и данъчно законодателство.',
  },
  {
    path: '/kontakti',
    title: 'Контакти | Дружество „Знание“, Хасково',
    description:
      'Свържете се с Дружество „Знание“: телефон 0878 398 920, имейл и адрес в Хасково. Въпроси за семинари, групово участие и фактури.',
  },
  {
    path: '/politika-za-poveritelnost',
    title: 'Политика за поверителност',
    description:
      'Политика за поверителност на Дружество „Знание“ — какви лични данни събираме, за какво ги ползваме и как можете да се свържете с нас.',
  },
  {
    path: '/biskvitki',
    title: 'Бисквитки',
    description:
      'Информация за бисквитките на сайта на Дружество „Знание“ и как можете да управлявате съгласието си.',
  },
  {
    path: '/deynost/ddfl',
    title: 'Семинар по ДДФЛ — януари 2027',
    description:
      'Онлайн семинар за данъците върху доходите на физическите лица през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
  {
    path: '/deynost/dds',
    title: 'Семинар по ДДС — януари 2027',
    description:
      'Онлайн семинар за ДДС в практиката на бизнеса през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
  {
    path: '/deynost/korp-danak',
    title: 'Семинар по корпоративен данък (ЗКПО) — януари 2027',
    description:
      'Онлайн семинар за облагането на юридическите лица по ЗКПО през януари 2027 г. Запишете се за новини, за да научите първи датата и лектора.',
  },
  {
    path: '/checklist',
    title: 'Безплатен checklist: Готови ли сте за 2027?',
    description:
      'Безплатен checklist с 14 неща, които трябва да проверите в трудовите договори, работното време, стажа и възнагражденията преди 2027 г.',
  },
  {
    path: '/404',
    title: 'Страницата не е намерена',
    description: 'Страницата, която търсите, не съществува.',
  },
];

const template = await readFile('dist/index.html', 'utf8');

function inject(html, { title, description, image = DEFAULT_OG, noindex, path }) {
  const fullTitle = `${title} | Дружество „Знание“`;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`);
  out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  out = out.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${fullTitle}"`);
  out = out.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`);
  out = out.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  out = out.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${SITE_URL}${image}"`);
  out = out.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${fullTitle}"`);
  out = out.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`);
  out = out.replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${SITE_URL}${image}"`);
  if (noindex) {
    out = out.replace(/<meta name="robots"[^>]*>/, '');
    out = out.replace(/<\/head>/, `<meta name="robots" content="noindex">\n  </head>`);
  } else {
    out = out.replace(/<meta name="robots"[^>]*>/, '');
  }
  return out;
}

for (const route of routes) {
  const html = inject(template, route);
  const outPath = join('dist', route.path, 'index.html');
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html);
  console.log(`Prerendered ${route.path} -> ${outPath}`);
}
