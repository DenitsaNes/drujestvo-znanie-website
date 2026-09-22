import { useState, useEffect } from 'react';

const INTERESTS = [
  { id: 'finance', label: 'Финанси' },
  { id: 'taxation', label: 'Данъчно облагане' },
  { id: 'ai', label: 'AI' },
  { id: 'other', label: 'Друго' },
];

function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('newsletterModalSeen');
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterModalSeen', 'true');
  };

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;

    // Placeholder: here you would send the data to your backend or email service.
    // eslint-disable-next-line no-console
    console.log('Newsletter signup:', { email, interests: selected });

    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="newsletter-modal__overlay" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
      <div className="newsletter-modal">
        <button
          type="button"
          className="newsletter-modal__close"
          onClick={closeModal}
          aria-label="Затвори"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 id="newsletter-title" className="newsletter-modal__title">
              Регистрирайте се за бюлетина на Дружество „Знание“
            </h2>
            <p className="newsletter-modal__lead">
              Научавайте първи за най-новите ни семинари!
            </p>

            <form onSubmit={handleSubmit} className="newsletter-modal__form">
              <label htmlFor="newsletter-email" className="newsletter-modal__label">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="newsletter-modal__input"
              />

              <fieldset className="newsletter-modal__interests">
                <legend className="newsletter-modal__label">Интересувам се от:</legend>
                <div className="newsletter-modal__checkboxes">
                  {INTERESTS.map((interest) => (
                    <label key={interest.id} className="newsletter-modal__checkbox">
                      <input
                        type="checkbox"
                        value={interest.id}
                        checked={selected.includes(interest.id)}
                        onChange={() => toggleInterest(interest.id)}
                      />
                      <span>{interest.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <p className="newsletter-modal__consent">
                С регистрирането на Вашия е-мейл адрес, Вие се съгласявате да получавате
                съобщения за предстоящи семинари, организирани от Дружество „Знание“. Ние
                ще използваме Вашия е-мейл адрес единствено, за да Ви изпращаме съобщения за
                предстоящи семинари. Можете да се откажете от получаването на съобщения по
                всяко време — линк за отказ ще има във всеки един е-мейл, който получите.
              </p>

              <button type="submit" className="button newsletter-modal__submit">
                ЗАПИСВАНЕ
              </button>
            </form>
          </>
        ) : (
          <div className="newsletter-modal__success">
            <p>Благодарим Ви! Успешно се записахте за бюлетина.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterModal;
