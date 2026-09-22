export const courses = [
  {
    id: 'ddfl',
    title: 'ДДФЛ',
    description: 'Данъци върху доходите на физически лица.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 120,
    earlyPrice: 90,
    stripePriceId: '',
  },
  {
    id: 'dds',
    title: 'ДДС',
    description: 'Данък върху добавената стойност за бизнеса.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 120,
    earlyPrice: 90,
    stripePriceId: '',
  },
  {
    id: 'korp-danak',
    title: 'Корпоративен данък',
    description: 'Данъчно облагане на юридически лица.',
    date: 'Януари 2027',
    note: 'Промени в данъчното законодателство',
    fullPrice: 150,
    earlyPrice: 110,
    stripePriceId: '',
  },
  {
    id: 'trudov-kodeks',
    title: 'Кодекс на труда',
    description: 'Трудово право и задължения на работодателите.',
    date: 'Януари 2027',
    note: 'Промени в трудовото законодателство',
    fullPrice: 120,
    earlyPrice: 90,
    stripePriceId: '',
  },
];

export function getCourseById(id) {
  return courses.find((course) => course.id === id) || null;
}
