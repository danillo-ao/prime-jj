import React from 'react';
import { ButtonProps } from '@components/button/button.types';

import * as Styles from './button.styles';
const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <Styles.ButtonContent onClick={onClick} {...props}>
      {children}
    </Styles.ButtonContent>
  );
};

export { Button };
