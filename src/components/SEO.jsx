import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogUrl }) => {
  const siteName = "Neffto Solution";
  const finalTitle = title || siteName;
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || description || "Neffto Solution - Your digital partner";

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description || "Neffto Solution - Your digital partner"} />
      <meta name="keywords" content={keywords || "Neffto Solution, web development, software, digital marketing"} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
    </Helmet>
  );
};

export default SEO;
