import { association } from '../data/association';
import InfoRow from '../components/InfoRow';

function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">За нас</h1>

        <div className="info-card">
          <InfoRow label="Наименование" value={association.name} />
          <InfoRow label="Статус" value={association.status} />
          <InfoRow label="ЕИК/ПИК" value={association.eik} />
          <InfoRow label="Регистрация по ДДС" value={association.vat} />
          <InfoRow label="Дата на регистрация" value={association.registrationDate} />
          <InfoRow label="Правна форма" value={association.legalForm} />
          <InfoRow label="Адрес" value={association.fullAddress} />
        </div>

      </div>
    </section>
  );
}

export default About;
