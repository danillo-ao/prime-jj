import React from 'react';
import { BenefitsProps } from '@screens/home/sections/about/components/benefits/benefits.types';

import * as Styles from './benefits.styles';

const Benefits: React.FC<BenefitsProps> = ({ title, description, icon }) => {
  return (
    <Styles.BenefitsCard>
      <Styles.BenefitsCardInner>
        <Styles.BenefitsCardIconsContent>
          {icon}
        </Styles.BenefitsCardIconsContent>

        <Styles.BenefitsCardTitle>{title}</Styles.BenefitsCardTitle>
        <Styles.BenefitsCardDescription>
          {description}
        </Styles.BenefitsCardDescription>
      </Styles.BenefitsCardInner>
    </Styles.BenefitsCard>
  );
};

export { Benefits };
