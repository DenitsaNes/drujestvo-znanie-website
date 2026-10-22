import { SITE, fmtPrice } from '../content/site';

export default function Ledger({
  price = SITE.PRICE,
  earlyPrice = SITE.EARLY_PRICE,
  earlyActive = SITE.EARLY_PRICE_ACTIVE,
  earlyDeadline = SITE.EARLY_DEADLINE_BG,
}) {
  return (
    <>
      <table className="ledger">
        <thead>
          <tr>
            <th scope="col">Участие</th>
            <th scope="col">Цена на човек</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Един участник</td>
            <td>{fmtPrice(price)}</td>
          </tr>
          {earlyActive && (
            <tr className="early" data-early>
              <td>
                <mark>Ранна цена — при плащане до {earlyDeadline}</mark>
              </td>
              <td>{fmtPrice(earlyPrice)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="ledger-note muted">
        Мястото Ви е потвърдено, когато плащането постъпи по банков път.
      </p>
    </>
  );
}
