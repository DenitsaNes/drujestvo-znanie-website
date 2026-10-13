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
          <tr>
            <td>Участвали в наш предишен семинар</td>
            <td>{fmtPrice(SITE.ALUMNI_PRICE)}</td>
          </tr>
          <tr>
            <td>Група от 3–4 души от една организация</td>
            <td>{fmtPrice(SITE.GROUP_PRICE_3_4)}</td>
          </tr>
          <tr>
            <td>Група от 5–9 души</td>
            <td>{fmtPrice(SITE.GROUP_PRICE_5_9)}</td>
          </tr>
          <tr>
            <td>Група от 10 и повече души</td>
            <td>{fmtPrice(SITE.GROUP_PRICE_10_PLUS)}</td>
          </tr>
        </tbody>
      </table>
      <p className="ledger-note muted">
        Отстъпките не се събират — прилагаме най-изгодната за Вас.
      </p>
      <p className="ledger-note muted">
        Мястото Ви е потвърдено, когато плащането постъпи по банков път.
      </p>
    </>
  );
}
