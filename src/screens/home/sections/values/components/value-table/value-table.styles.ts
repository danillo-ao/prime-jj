import { styled } from '@theme/theme';

export const ValueTableContent = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$primary',
  borderRadius: '$1',
  overflow: 'hidden',
});

export const ValueTableHeader = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  bg: '$primary',
  pa: '$4',
  alignItems: 'center',
  justifyContent: 'center',

  '&:before': {
    content: '',
    position: 'absolute',
    width: 15,
    height: 15,
    bg: '$primary',
    transform: 'rotate(45deg) translateX(-50%) translateY(15px)',
    left: '50%',
    bottom: '0',
    zIndex: '$1',
  },
});

export const ValueTableHeaderTitleWrapper = styled('div', {
  flex: 1,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const ValueTableHeaderBadge = styled('div', {
  width: 30,
  height: 30,
  borderRadius: '$pill',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  bg: '$white',
  overflow: 'hidden',

  '&:before': {
    content: '',
    width: 10,
    height: 40,
    bg: '$black',
    position: 'absolute',
    left: 10,
    top: -10,
    transform: 'rotate(35deg)',
  },

  variants: {
    belt: {
      white: {
        bg: '$white_belt',
      },
      purple: {
        bg: '$purple_belt',
      },
      brown: {
        bg: '$brown_belt',
      },
      black: {
        bg: '$black_belt',
        '&:before': {
          bg: '$red500',
          boxShadow: '0 0 0 2px #fff',
        },
      },
    },
  },
});

export const ValueTableHeaderPreTitle = styled('p', {
  width: '100%',
  position: 'relative',
  fontSize: '$1',
});
export const ValueTableHeaderTitle = styled('p', {
  width: '100%',
  position: 'relative',
  fontSize: '$4',
  fontFamily: '$title',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  mt: -4,
});

export const ValueTableBody = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '$4',
  bg: '$white',
  flex: 1,
});

export const ValueTableBodyDivisor = styled('div', {
  width: '100%',
  height: 1,
  bg: '$grey100',
  my: '$4',
});

export const ValueTableBodyLine = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  px: '$4',
  justifyContent: 'space-between',
});

export const ValueTableBodyLineLabel = styled('p', {
  padding: '$0',
  margin: '$0',
  fontSize: '$2',
});

export const ValueTableBodyLineValue = styled('p', {
  padding: '$0',
  margin: '$0',
  fontSize: '$2',
  fontWeight: 'bold',
});

export const ValueTablePricePrefix = styled('span', {
  fontSize: '$4',
  alignSelf: 'flex-end',
  lineHeight: '1.3em',
});

export const ValueTablePriceSuffix = styled('span', {
  fontSize: '$4',
  alignSelf: 'flex-start',
  lineHeight: '1.3em',
});

export const ValueTablePrice = styled('span', {
  width: '100%',
  textAlign: 'center',
  fontFamily: '$title',
  color: '$secondary',
  fontWeight: 'bold',
  fontSize: '$10',
  lineHeight: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  py: '$3',
});

export const ValueTableFooter = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  bg: '$white',
  pb: '$4',
});
