import { useState } from 'react';

function CheckoutButton({ priceId, children }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Възникна грешка при създаването на плащането.');
      }
    } catch (error) {
      alert('Възникна грешка. Моля, опитайте отново.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="button"
      style={{ marginTop: '1rem', width: '100%' }}
    >
      {loading ? 'Зареждане...' : children}
    </button>
  );
}

export default CheckoutButton;
