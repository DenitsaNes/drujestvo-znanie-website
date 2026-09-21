import { association } from '../data/association';

function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      'Формата за контакт все още не е свързана с имейл услуга. Можете да я свържете с Formspree, Netlify Forms или EmailJS.'
    );
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Контакти</h1>

        <div className="two-columns">
          <div className="contact-info">
            <h2>Адрес</h2>
            <address>{association.fullAddress}</address>

            <h2>Телефон</h2>
            <p>
              <a href="tel:0878398920">0878 398 920</a>
            </p>

            <h2>Имейл</h2>
            <p>
              <a href="mailto:drujestvo_znanie@abv.bg">drujestvo_znanie@abv.bg</a>
            </p>

            <h2>Социални мрежи</h2>
            <p className="placeholder-note">
              [Място за връзки към социални мрежи]
            </p>
          </div>

          <div className="contact-form-wrapper">
            <h2>Изпратете съобщение</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Име</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Имейл</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Съобщение</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className="button">
                Изпрати
              </button>
            </form>
          </div>
        </div>

        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps?q=g.k.+Uchilishtni,+бул.+%22България%22+150,+6300+Haskovo&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта на офиса"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
