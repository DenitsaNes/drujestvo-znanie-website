import { SITE, fmtPrice } from '../content/site';

export default function SeminarSlip({ showPrice = true }) {
  return (
    <aside className="slip" aria-label="Данни за семинара">
      <div className="slip__head">
        <div className="slip__kind">Семинар</div>
        <div className="slip__title">{SITE.SEM1_TITLE}</div>
      </div>
      <dl>
        <dt>Дата</dt>
        <dd>{SITE.SEM1_DATE}</dd>
        <dt>Час</dt>
        <dd>
          {SITE.SEM1_TIME || '—'}
          {!SITE.SEM1_TIME && (
            <span className="sub">(ще бъде потвърден)</span>
          )}
        </dd>
        <dt>Къде</dt>
        <dd>
          {SITE.SEM1_ZOOM}
          <span className="sub">Линкът идва на имейла Ви ден преди семинара.</span>
        </dd>
        <dt>Продължителност</dt>
        <dd>{SITE.SEM1_DURATION}</dd>
        <dt>Лектор</dt>
        <dd>{SITE.SEM1_LECTURER}</dd>
        {showPrice && (
          <>
            <dt>Цена</dt>
            <dd className="price">
              {fmtPrice(SITE.PRICE)}
              <span className="sub">на участник</span>
            </dd>
            {SITE.EARLY_PRICE_ACTIVE && (
              <>
                <dt data-early>Ранна цена</dt>
                <dd className="early" data-early>
                  <mark>
                    {fmtPrice(SITE.EARLY_PRICE)} при плащане до {SITE.EARLY_DEADLINE_BG}
                  </mark>
                </dd>
              </>
            )}
          </>
        )}
      </dl>
    </aside>
  );
}
