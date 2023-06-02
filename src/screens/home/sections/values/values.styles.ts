import { styled } from '@theme/theme';

export const ValuesSectionContent = styled('div', {
  width: '100%',
  bg: '$grey900',
  display: 'flex',
  flexDirection: 'column',
  my: -5,
});

export const ValuesTableContent = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '$8',
  gridRowGap: '$5',
  mt: '$8',
});

export const ValuesTableFooter = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  mt: '$4',
  mb: '$8',
  gap: '$1',
});

export const ValuesTableFooterComment = styled('p', {
  width: '100%',
  color: '$white',
  fontSize: '$1',
});

export const ValuesTableFooterCommentHighlight = styled('span', {
  color: '$primary',
  fontSize: '$1',
  fontWeight: 'bold',
  fontFamily: '$title',
  mr: '$2',
});
export const ValuesTableFooterLink = styled('a', {
  color: '$primary',
  fontSize: '$1',
  cursor: 'pointer',
  textDecoration: 'underline',
});

export const ValuesTableFooterColored = styled('span', {
  color: '$primary',
  fontSize: '$1',
});
