import { styled } from '@theme/theme';

export const HeaderContent = styled('div', {
  width: '100%',
  position: 'relative',
  height: '$units$headerHeight',
  backgroundColor: '#1a1a1a',
});

export const HeaderBelt = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'row',
});

export const HeaderBeltRed = styled('div', {
  width: '200px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderColor: '$white',
  borderStyle: 'solid',
  borderWidth: 0,
  borderRightWidth: '10px',
  borderLeftWidth: '10px',
  marginLeft: '10%',
  backgroundColor: '#da222c',
  gap: '10px',
  padding: '0 15px',
});

export const HeaderBeltGrade = styled('div', {
  width: '7px',
  height: '100%',
  display: 'flex',
  backgroundColor: '#fff',
});
