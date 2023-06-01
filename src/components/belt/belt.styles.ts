import { styled } from '@theme/theme';

export const BeltContent = styled('div', {
  width: 100,
  height: 25,
  bg: '$white',
  borderRadius: '$1',
  px: '$3',

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
  width: 45,
  height: 25,
  bg: '$black',

  variants: {
    belt: {
      white: { border: 'none' },
      blue: { border: 'none' },
      purple: { border: 'none' },
      brown: { border: 'none' },
      black: {
        bg: '$red500',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderColor: '$white',
        borderStyle: 'solid',
      },
    },
  },
});
