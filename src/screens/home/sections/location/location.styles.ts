import { styled } from '@theme/theme';

export const LocationMapContent = styled('div', {
  width: '100%',
  height: 300,
  mt: '$5',
});

export const LocationMobileAction = styled('div', {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$7',
  gap: '$4',
  display: 'none',

  '@600': {
    display: 'flex',
  },

  '@400': {
    '& button': {
      fontSize: '$2',
    },
  },
});
