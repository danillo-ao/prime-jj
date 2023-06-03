import React from 'react';
import { getThemeColor } from '@theme/theme.utils';

const WaveLinearTop = () => {
  return (
    <svg viewBox="0 0 1440 320" className="no-events">
      <path
        fill={getThemeColor('primary')}
        fillOpacity="1"
        d="M0,256L1440,192L1440,320L0,320Z"
      />
    </svg>
  );
};

export default WaveLinearTop;
