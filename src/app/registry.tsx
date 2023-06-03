import React from 'react';
import { getCssText } from '@theme/theme';
import { globalStyles } from '@styles/global.styles';

export default function StitchesRegistry() {
  globalStyles();
  return (
    <head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <meta property="og:title" content="Prime JiuJitsu" />
      <meta
        property="og:description"
        content="Academia de JiuJitsu em Santo André"
      />
      <meta property="og:image" content="/prime-logo.png" />
      <meta
        name="keywords"
        content="BJJ, Jiu Jitsu, Prime, Cicero Costha, Santo André"
      />
      <meta name="author" content="Danillo Alves de Oliveira" />
    </head>
  );
}
