import { styled } from '@theme/theme';

export const ContactOptionContent = styled('a', {
  width: '70%',
  position: 'relative',
  display: 'flex',
  pa: '$4',
  borderRadius: '$2',
  bg: '$background2',
  cursor: 'pointer;',
  transition: '0.2s',
  flexDirection: 'row',
  gap: '$4',
  textDecoration: 'none',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 0px 10px rgba(1, 173, 238, 0.5), 0 0 0 1px #01adee',
  },

  '@900': {
    width: '100%',
  },
});

export const ContactOptionIcon = styled('div', {
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContactOptionTexts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ContactOptionLabel = styled('p', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$title',
  color: '$primary',
});

export const ContactOptionDescription = styled('p', {
  display: 'flex',
  flexDirection: 'column',
  color: '$white',
  fontSize: '$1',
});
