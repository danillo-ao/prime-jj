import React from 'react';

import * as Styles from './black-belt.styles';

const BlackBelt: React.FC = () => {
  return (
    <Styles.BlackBelt>
      <Styles.BlackBeltRed>
        <Styles.BlackBeltGrade />
        <Styles.BlackBeltGrade />
      </Styles.BlackBeltRed>
    </Styles.BlackBelt>
  );
};

export default BlackBelt;
