import React from 'react';
import { BeltProps } from '@components/belt/belt.types';

import * as Styles from './belt.styles';

const Belt: React.FC<BeltProps> = ({ color }) => {
  return (
    <Styles.BeltContent belt={color}>
      <Styles.BeltForeground belt={color} />
    </Styles.BeltContent>
  );
};

export { Belt };
