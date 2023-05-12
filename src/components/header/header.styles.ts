import { styled } from '@theme/theme';

export const HeaderContent = styled('div', {
  width: '100%',
  position: 'relative',
  height: '$units$headerHeight',
  backgroundColor: '$grey900',
  display: 'flex',
});

export const HeaderInner = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
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
  fontFamily: '$default',
  fontSize: '$default',
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
