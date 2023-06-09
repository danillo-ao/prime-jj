import { styled } from '@theme/theme';

export const Page = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  backgroundColor: '$background0',
});

export const PageWrapper = styled('div', {
  width: '100%',
  maxWidth: '1230px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  px: '$4',
});
