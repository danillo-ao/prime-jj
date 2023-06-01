import { styled } from '@theme/theme';

export const Section = styled('section', {
  width: '100%',
});

export const SectionTitle = styled('h2', {
  width: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '$primary',
  fontSize: '$title',
  fontFamily: '$title',
  pa: '$0',
});

export const SectionSubtitle = styled('h3', {
  width: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '$secondary',
  fontSize: '$subtitle',
  pa: '$0',
});

export const SectionGrid = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$5',
  mt: '$5',
});

export const SectionGridItem = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const SectionGridDivisor = styled('div', {
  maxWidth: 1,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  borderRadius: '$pill',
  bg: '$primary',
  mx: '$4',
  opacity: 0.5,
});
