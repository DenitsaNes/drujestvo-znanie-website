import { useEffect } from 'react';

const TAG_ID = 'G-XNL1K5R5PJ';
const CONSENT_KEY = 'znanie_cookie_consent';

function loadTag() {
  if (window.__znanieGtagLoaded) return;
  window.__znanieGtagLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', TAG_ID);
}

export default function Analytics() {
  useEffect(() => {
    try {
      if (localStorage.getItem(CONSENT_KEY) === 'yes') loadTag();
    } catch {
      // ignore
    }

    const onConsent = () => {
      try {
        if (localStorage.getItem(CONSENT_KEY) === 'yes') loadTag();
      } catch {
        // ignore
      }
    };

    window.addEventListener('znanie-consent', onConsent);
    return () => window.removeEventListener('znanie-consent', onConsent);
  }, []);

  return null;
}
