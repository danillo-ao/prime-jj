import { styled } from '@theme/theme';

export const HeaderContent = styled('div', {
  width: '100%',
  position: 'fixed',
  height: '$units$headerHeight',
  display: 'flex',
  left: 0,
  top: 0,
  zIndex: '$menu',

  '&:before': {
    content: '',
    width: '100%',
    height: '150%',
    position: 'absolute',
    left: 0,
    top: 0,
    bg: 'rgb(2,0,36)',
    background: 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 57%)',
    transition: '0.3s',
    transform: 'translateY(-100%)',
  },

  variants: {
    scrolled: {
      true: {
        '&:before': {
          transform: 'translateY(0)',
        },
      },
    },
  },
});

export const HeaderInner = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  py: '$4',
});

export const HeaderMenuOptions = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$3',
  px: '$4',
});

export const HeaderMenuOption = styled('button', {
  textTransform: 'uppercase',
  py: '$1',
  px: '$3',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: '$title',
  fontSize: '$2',
  transition: '0.2s',

  '&:hover': {
    color: '$primary',
  },
});

export const HeaderMenuLabel = styled('h1', {
  textTransform: 'uppercase',
  fontFamily: '$prime',
  fontSize: '$8',
  py: '$1',
  px: '$3',
  cursor: 'pointer',
  color: '$primary',
  margin: '$0',
  padding: '$0',
  lineHeight: '$7-5',
  pt: '4px',
});
