import { styled } from '@theme/theme';

export const AboutBenefitsCardsWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '$5',
  gridRowGap: '$5',
});
