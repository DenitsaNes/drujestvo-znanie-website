import { SITE, fmtPrice } from '../content/site';

export default function Ledger() {
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
            <td>{fmtPrice(SITE.PRICE)}</td>
          </tr>
          {SITE.EARLY_PRICE_ACTIVE && (
            <tr className="early" data-early>
              <td>
                <mark>Ранна цена — при плащане до {SITE.EARLY_DEADLINE_BG}</mark>
              </td>
              <td>{fmtPrice(SITE.EARLY_PRICE)}</td>
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
