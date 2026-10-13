import { Link } from 'react-router-dom';
import { ROUTES } from '../content/site';

const SEMINARS = [
  {
    id: 'ddfl',
    name: 'ДДФЛ',
    text: 'Данъци върху доходите на физическите лица',
    status: 'Дата и лектор — скоро',
  },
  {
    id: 'dds',
    name: 'ДДС',
    text: 'Данъкът върху добавената стойност в практиката на бизнеса',
    status: 'Дата и лектор — скоро',
  },
  {
    id: 'korp-danak',
    name: 'Корпоративен данък',
    text: 'Облагане на юридическите лица по ЗКПО',
    status: 'Дата и лектор — скоро',
  },
];

export default function SeminarRows() {
  return (
    <ul className="rows">
      {SEMINARS.map((item) => (
        <li key={item.id}>
          <Link to={`${ROUTES.HOME}deynost/${item.id}`}>
            <span className="rows__name">{item.name}</span>
            <span>{item.text}</span>
            <span className="rows__status">{item.status}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
