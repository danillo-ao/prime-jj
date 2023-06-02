import { styled } from '@theme/theme';

export const BeltContent = styled('div', {
  width: '100%',
  height: '100%',
  bg: '$white',
  py: '$3',

  variants: {
    belt: {
      white: { bg: '$white' },
      blue: { bg: '$blue400' },
      purple: { bg: '$purple400' },
      brown: { bg: 'brown' },
      black: { bg: '$black' },
    },
  },
});

export const BeltForeground = styled('div', {
  width: '100%',
  height: 35,
  bg: '$black',

  variants: {
    belt: {
      white: { border: 'none' },
      blue: { border: 'none' },
      purple: { border: 'none' },
      brown: { border: 'none' },
      black: {
        bg: '$red500',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: '$white',
        borderStyle: 'solid',
      },
    },
  },
});
