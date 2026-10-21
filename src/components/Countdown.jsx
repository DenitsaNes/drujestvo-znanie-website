import { useEffect, useState } from 'react';
import { SITE } from '../content/site';

function getRemaining() {
  const diff = Date.parse(SITE.EARLY_DEADLINE_ISO) - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

export default function Countdown({ className = '' }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 60000);
    return () => clearInterval(id);
  }, []);

  if (!remaining) return null;

  return (
    <span className={`countdown ${className}`.trim()} aria-live="polite">
      Остават {remaining.days} дни, {remaining.hours} ч. и {remaining.minutes} мин.
    </span>
  );
}
