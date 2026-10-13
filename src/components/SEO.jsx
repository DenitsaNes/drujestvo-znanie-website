import { Helmet } from 'react-helmet-async';
import { SITE } from '../content/site';

export default function SEO({
  title,
  description,
  pathname = '',
  image = SITE.DEFAULT_OG_IMAGE,
  noindex = false,
}) {
  const url = `${SITE.SITE_URL}${pathname}`;
  const fullTitle = title ? `${title} | ${SITE.ORG}` : SITE.ORG;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE.SITE_URL}${image}`} />
      <meta property="og:locale" content="bg_BG" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE.SITE_URL}${image}`} />
    </Helmet>
  );
}
