import { styled } from '@theme/theme';

export const ContactOptionsGroup = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',
});

export const ContactOptionsCTAWrapper = styled('div', {
  width: '70%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flex: 1,
  margin: '0 auto',

  '@900': {
    width: '100%',
  },
});

export const ContactOptionsLogoWrapper = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '$10',
});

export const ContactOptionsLogo = styled('img', {
  width: 100,
  position: 'relative',
});

export const ContactOptionsLabel = styled('p', {
  width: '100%',
  position: 'relative',
  textAlign: 'center',
  mb: '$10',
  color: '$white',
});
