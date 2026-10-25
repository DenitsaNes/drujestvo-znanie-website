import { Link } from 'react-router-dom';
import { SITE, ROUTES } from '../content/site';
import Countdown from './Countdown';

export default function AnnouncementBar() {
  if (SITE.EARLY_PRICE_ACTIVE) {
    return (
      <div className="notice" data-early>
        <div className="wrap">
          <span>
            <mark>
              Ранна цена {SITE.EARLY_PRICE} € при плащане до {SITE.EARLY_DEADLINE_BG}.
            </mark>{' '}
            След това — {SITE.PRICE} €. <Countdown />
          </span>
          <Link to={`${ROUTES.ZAPISI}?course=trudov-kodeks#registration-form`}>
            Запишете се
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="notice">
      <div className="wrap">
        <span>
          <mark>Важно:</mark> Заради Решение № 17 на Конституционния съд ще има бонус лекция за
          новите правила за трудовия стаж.
        </span>
        <Link to={`${ROUTES.SEMINAR_28_OKT}#bonus`}>Научете повече</Link>
      </div>
    </div>
  );
}
