import { styled } from '@theme/theme';

export const BenefitsCard = styled('div', {
  flexGrow: 1,
  width: '100%',
  position: 'relative',
  flexDirection: 'column',
  display: 'flex',
});

export const BenefitsCardInner = styled('div', {
  flexGrow: 1,
  position: 'relative',
  display: 'flex',
  bg: '$background1',
  pa: '$7',
  flexDirection: 'column',
  borderRadius: '$1',
  cursor: 'pointer',
  transition: '0.5s',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 0px 15px rgba(1, 173, 238, 0.5)',
  },

  '@mobile': {
    pa: '$4',
  },
});

export const BenefitsCardIconsContent = styled('div', {
  position: 'absolute',
  right: '$7',
  top: '$7',

  '@1045': {
    '& svg': {
      width: 25,
      height: 25,
    },
  },

  '@mobile': {
    top: '$4',

    '& svg': {
      width: 20,
      height: 20,
    },
  },
});

export const BenefitsCardTitle = styled('h4', {
  width: '100%',
  padding: '$0',
  margin: '$0',
  fontFamily: '$title',
  textTransform: 'capitalize',
  fontSize: '$5',
  color: '$white',
  mb: '$5',

  '@1045': {
    fontSize: '$3',
  },

  '@mobile': {
    mb: '$3',
  },
});

export const BenefitsCardDescription = styled('p', {
  padding: '$0',
  margin: '$0',
  color: '$white',
  lineHeight: '$6',
  opacity: 0.7,

  '@1045': {
    fontSize: '$2',
    lineHeight: '$5',
  },
});
