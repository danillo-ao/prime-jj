import { styled } from '@theme/theme';

export const ButtonContent = styled('button', {
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  bg: 'transparent',
  py: '$3',
  px: '$5',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$primary',
  borderRadius: '$1',
  color: '$white',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.5s',
  textDecoration: 'none',

  '&:hover': {
    bg: '$primary',
    transform: 'translateY(-2px)',
    boxShadow: '0px 0px 15px rgba(1, 173, 238, 0.5)',
  },
});
