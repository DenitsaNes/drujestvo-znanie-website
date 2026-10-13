import { SITE, fmtPrice } from './site';
import { isEarlyPriceActive } from '../hooks/useEarlyPrice';

export function calculatePrice({ participants }) {
  const count = Math.max(1, Number(participants) || 1);
  const early = isEarlyPriceActive();

  let perPerson = SITE.PRICE;

  if (early) {
    perPerson = SITE.EARLY_PRICE;
  }

  if (count >= 10 && SITE.GROUP_PRICE_10_PLUS < perPerson) {
    perPerson = SITE.GROUP_PRICE_10_PLUS;
  } else if (count >= 5 && SITE.GROUP_PRICE_5_9 < perPerson) {
    perPerson = SITE.GROUP_PRICE_5_9;
  } else if (count >= 3 && SITE.GROUP_PRICE_3_4 < perPerson) {
    perPerson = SITE.GROUP_PRICE_3_4;
  }

  return {
    perPerson,
    total: perPerson * count,
    count,
    early,
  };
}

export function formatTotal({ total, count, perPerson }) {
  const people = count === 1 ? '1 човек' : `${count} души`;
  return `Обща сума: ${fmtPrice(total)} (${fmtPrice(perPerson)} на човек × ${people})`;
}
