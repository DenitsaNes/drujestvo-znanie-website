import sharp from 'sharp';

const files = [
  ['public/og/znanie.svg', 'public/og/znanie.png'],
  ['public/og/seminar-28-oktomvri.svg', 'public/og/seminar-28-oktomvri.png'],
  ['public/favicon.svg', 'public/favicon.png'],
];

for (const [input, output] of files) {
  const resize = output.includes('favicon') ? { width: 32, height: 32 } : undefined;
  await sharp(input).resize(resize).png().toFile(output);
  console.log(`Generated ${output}`);
}
