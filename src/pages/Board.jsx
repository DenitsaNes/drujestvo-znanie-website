import { association } from '../data/association';

function Board() {
  return (
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
  );
}

export default Board;
