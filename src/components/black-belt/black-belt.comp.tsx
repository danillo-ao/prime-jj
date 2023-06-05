import React from 'react';

import * as Styles from './black-belt.styles';
import { PageWrapper } from '@components/page';

const BlackBelt: React.FC = () => {
  return (
    <Styles.BlackBelt>
      <PageWrapper>
        <Styles.BlackBeltRed>
          <Styles.BlackBeltGrade />
          <Styles.BlackBeltGrade />
          <Styles.BlackBeltGrade />
        </Styles.BlackBeltRed>
      </PageWrapper>
    </Styles.BlackBelt>
  );
};

export { BlackBelt };
