import { styled } from '@theme/theme';

export const BlackBelt = styled('div', {
  width: '100%',
  height: '40px',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'row',
  bg: '$black',
});

export const BlackBeltRed = styled('div', {
  width: '200px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  borderColor: '$white',
  borderStyle: 'solid',
  borderWidth: 0,
  borderRightWidth: '5px',
  borderLeftWidth: '5px',
  marginLeft: '10%',
  backgroundColor: '$red600',
  gap: '$2',
  px: '$4',
});

export const BlackBeltGrade = styled('div', {
  width: '7px',
  height: '100%',
  display: 'flex',
  backgroundColor: '$white',
});
