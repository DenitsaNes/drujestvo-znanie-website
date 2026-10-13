import { useEffect } from 'react';
import { SITE } from '../content/site';

export function useEarlyPrice() {
  useEffect(() => {
    if (!SITE.EARLY_PRICE_ACTIVE) {
      document.documentElement.classList.add('is-expired');
      return;
    }
    const expired = Date.now() > Date.parse(SITE.EARLY_DEADLINE_ISO);
    document.documentElement.classList.toggle('is-expired', expired);
  }, []);
}

export function isEarlyPriceActive() {
  if (!SITE.EARLY_PRICE_ACTIVE) return false;
  return Date.now() <= Date.parse(SITE.EARLY_DEADLINE_ISO);
}
