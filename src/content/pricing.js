import { SITE, fmtPrice } from './site';
import { isEarlyPriceActive } from '../hooks/useEarlyPrice';

export function calculatePrice({ participants }) {
  const count = Math.max(1, Number(participants) || 1);
  const early = isEarlyPriceActive();

  const perPerson = early ? SITE.EARLY_PRICE : SITE.PRICE;

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
