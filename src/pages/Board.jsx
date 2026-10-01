import { association } from '../data/association';
import SEO from '../components/SEO';

function Board() {
  return (
    <>
      <SEO
        title="Управителен съвет"
        description="Членове на Управителния съвет на Дружество „Знание“, гр. Хасково."
        pathname="/upravitelen-savet"
      />
      <section className="section">
      <div className="container">
        <h1 className="page-title">Управителен съвет</h1>
        <ul className="board-list">
          {association.board.map((member) => (
            <li key={member} className="board-member">
              {member}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
}

export default Board;
