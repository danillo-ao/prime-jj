import { styled } from '@theme/theme';

export const AboutHistoryImageContent = styled('div', {
  position: 'relative',
  width: '100%',

  '&:after': {
    content: '',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',

    boxShadow: 'inset 0 0 20px 25px #182432, inset 0 0 20px 25px #182432',
  },
});

export const AboutHistoryImage = styled('img', {
  width: '100%',
  position: 'relative',
});

export const AboutBenefitsCardsWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '$5',
  gridRowGap: '$5',

  '@900': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@600': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});
