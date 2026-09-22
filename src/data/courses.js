export const courses = [
  {
    id: 'ddfl',
    title: 'ДДФЛ',
    description: 'Данъци върху доходите на физически лица.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 100,
    earlyPrice: 100,
    stripePriceId: '',
  },
  {
    id: 'dds',
    title: 'ДДС',
    description: 'Данък върху добавената стойност за бизнеса.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 100,
    earlyPrice: 100,
    stripePriceId: '',
  },
  {
    id: 'korp-danak',
    title: 'Корпоративен данък',
    description: 'Данъчно облагане на юридически лица.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 100,
    earlyPrice: 100,
    stripePriceId: '',
  },
  {
    id: 'trudov-kodeks',
    title: 'Кодекс на труда',
    description: 'Трудово право и задължения на работодателите.',
    date: 'Януари 2027',
    note: 'Промени в трудовото законодателство',
    fullPrice: 100,
    earlyPrice: 100,
    stripePriceId: '',
  },
];

export function getCourseById(id) {
  return courses.find((course) => course.id === id) || null;
}
