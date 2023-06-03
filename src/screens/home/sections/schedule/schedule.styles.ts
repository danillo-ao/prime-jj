import { styled } from '@theme/theme';

export const ScheduleTableContent = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'grid',

  gridTemplateColumns: 'repeat(6, 1fr)',
  gridColumnGap: '$2',
  gridRowGap: '$2',
  my: '$4',
  mx: 'auto',
});

export const ScheduleTableLegends = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$6',
});

export const ScheduleTableLegend = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$2',
  color: '$white',
});

export const ScheduleTableLegendBadge = styled('div', {
  width: 20,
  height: 20,
  position: 'relative',
  display: 'flex',
  borderRadius: '$1',
  flexDirection: 'row',
  border: '1px solid #000',
});

export const ScheduleTableTips = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  mt: '$4',
});
export const ScheduleTableTip = styled('p', {
  width: '100%',
  color: '$white',
  fontSize: '$1',

  '& a': {
    color: '$primary',
    fontSize: '$1',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export const ScheduleTableTipAsterisk = styled('span', {
  color: '$primary',
  fontSize: '$1',
  fontWeight: 'bold',
  fontFamily: '$title',
  mr: '$2',
});

export const ScheduleTableCTA = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mt: 50,
});
