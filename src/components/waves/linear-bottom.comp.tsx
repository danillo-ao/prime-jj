import React from 'react';
import { getThemeColor } from '@theme/theme.utils';

const WaveLinearBottom = () => {
  return (
    <svg viewBox="0 0 1440 320">
      <path
        fill={getThemeColor('primary')}
        fillOpacity="1"
        d="M0,96L1440,32L1440,0L0,0Z"
      />
    </svg>
  );
};

export default WaveLinearBottom;
