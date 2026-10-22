import { SITE, fmtPrice } from './site';
import { isEarlyPriceActive } from '../hooks/useEarlyPrice';

export function calculatePrice({
  participants,
  price = SITE.PRICE,
  earlyPrice = SITE.EARLY_PRICE,
  earlyActive = isEarlyPriceActive(),
}) {
  const count = Math.max(1, Number(participants) || 1);
  const early = Boolean(earlyActive) && earlyPrice > 0 && earlyPrice < price;

  const perPerson = early ? earlyPrice : price;

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
