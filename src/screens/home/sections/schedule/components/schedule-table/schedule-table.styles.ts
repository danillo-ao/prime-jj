import { styled } from '@theme/theme';

export const ScheduleTableContent = styled('div', {
  width: '100%',
  position: 'relative',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$grey900',
  borderRadius: '$1',
  overflow: 'hidden',
});

export const ScheduleTableHeader = styled('div', {
  width: '100%',
  pa: '$4',
  bg: '$primary',
  textAlign: 'center',
  fontFamily: '$title',
  textTransform: 'lowercase',
  fontWeight: 'bold',
  fontSize: '$4',
});

export const ScheduleTableBody = styled('div', {
  width: '100%',
  bg: '$white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ScheduleTableHour = styled('div', {
  width: '100%',
  bg: '$primary',
  py: '$2',
  textAlign: 'center',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '$white',
  height: 35,

  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: '$grey900',

  '&:last-of-type': {
    borderBottomWidth: 0,
  },

  '& svg': {
    mr: '$1',
  },

  variants: {
    category: {
      disabled: { bg: '$grey400' },
      adult: { bg: '$adult' },
      kids: { bg: '$kids' },
    },
  },
});
