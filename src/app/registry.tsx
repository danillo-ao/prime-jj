import React from 'react';
import { getCssText } from '@theme/theme';
import { globalStyles } from '@styles/global.styles';

export default function StitchesRegistry() {
  globalStyles();
  return (
    <head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </head>
  );
}
