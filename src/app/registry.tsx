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
    </head>
  );
}
