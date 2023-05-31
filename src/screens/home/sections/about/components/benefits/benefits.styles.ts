import { styled } from '@theme/theme';

export const BenefitsCard = styled('div', {
  flexGrow: 1,
  maxWidth: '33%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  pa: '$5',
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
});

export const BenefitsCardIconsContent = styled('div', {
  position: 'absolute',
  mb: '$4',
  right: '$7',
  top: '$7',
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
});

export const BenefitsCardDescription = styled('p', {
  padding: '$0',
  margin: '$0',
  color: '$white',
  lineHeight: '$6',
  opacity: 0.7,
});
