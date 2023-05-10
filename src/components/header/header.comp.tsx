import React from 'react';
import { HeaderProps } from '@components/header/header.types';

import * as Styles from './header.styles';

const Header: React.FC<HeaderProps> = () => {
  return (
    <Styles.HeaderContent>
      <Styles.HeaderBelt>
        <Styles.HeaderBeltRed>
          <Styles.HeaderBeltGrade />
          <Styles.HeaderBeltGrade />
        </Styles.HeaderBeltRed>
      </Styles.HeaderBelt>

      <div>
        <div />
        <button>Header</button>
      </div>
    </Styles.HeaderContent>
  );
};

export { Header };
