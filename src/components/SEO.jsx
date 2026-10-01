import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://znaniehaskovo.eu';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`;

function SEO({
  title,
  description,
  pathname = '',
  image = DEFAULT_IMAGE,
  type = 'website',
}) {
  const fullTitle = title
    ? `${title} | Дружество "Знание"`
    : 'Дружество "Знание" — гр. Хасково';
  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
