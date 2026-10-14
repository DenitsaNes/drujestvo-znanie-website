const STEPS = [
  { title: 'Попълвате формата.', text: 'Отнема около две минути.' },
  {
    title: 'Получавате данните за плащане.',
    text: 'Виждате ги веднага и ги получавате на имейла си.',
  },
  {
    title: 'Плащате по банков път.',
    text: 'Мястото Ви е потвърдено, когато плащането постъпи.',
  },
  {
    title: 'Ден преди семинара',
    text: 'Получавате линк за Zoom.',
  },
  {
    title: 'След семинара',
    text: 'Получавате материалите, презентацията и сертификата.',
  },
];

export default function Steps() {
  return (
    <section className="section section--center">
      <div className="wrap">
        <div className="section__head">
          <h2>Как става записването</h2>
        </div>
        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span className="muted">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
