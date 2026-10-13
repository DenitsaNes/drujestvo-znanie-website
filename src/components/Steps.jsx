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
    text: 'получавате линк за Zoom.',
  },
  {
    title: 'След семинара',
    text: 'получавате материалите, 2027 READY PACK и сертификата.',
  },
];

export default function Steps() {
  return (
    <ol className="steps">
      {STEPS.map((step) => (
        <li key={step.title}>
          <strong>{step.title}</strong>
          <span className="muted">{step.text}</span>
        </li>
      ))}
    </ol>
  );
}
