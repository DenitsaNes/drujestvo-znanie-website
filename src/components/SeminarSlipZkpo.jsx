import { SITE, fmtPrice } from '../content/site';

export default function SeminarSlipZkpo() {
  return (
    <aside className="slip" aria-label="Данни за семинара">
      <div className="slip__head">
        <div className="slip__kind">Семинар</div>
        <div className="slip__title">{SITE.SEM2_TITLE}</div>
      </div>
      <dl>
        <dt>Дата</dt>
        <dd>{SITE.SEM2_DATE}</dd>
        <dt>Час</dt>
        <dd>{SITE.SEM2_TIME}</dd>
        <dt>Къде</dt>
        <dd>
          {SITE.SEM2_ZOOM}
          <span className="sub">Линкът идва на имейла Ви ден преди семинара.</span>
        </dd>
        <dt>Продължителност</dt>
        <dd>{SITE.SEM2_DURATION}</dd>
        <dt>Лектор</dt>
        <dd>{SITE.SEM2_LECTURER}</dd>
        <dt>Цена</dt>
        <dd className="price">
          {fmtPrice(SITE.SEM2_PRICE)}
          <span className="sub">на участник</span>
        </dd>
      </dl>
    </aside>
  );
}
