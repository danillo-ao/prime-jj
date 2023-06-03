import { styled } from '@theme/theme';

export const FooterContent = styled('footer', {
  width: '100%',
  pt: '$10',
  bg: '$grey900',
  display: 'flex',
  flexDirection: 'column',
  mt: '$10',
});

export const FooterSections = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
  mb: '$5',
});

export const FooterDatas = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  bg: '$black',
  mt: '$4',
  py: '$4',
});

export const FooterDatasLine = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  opacity: 0.5,
});

export const FooterName = styled('p', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  color: '$white',
  fontFamily: '$title',
  px: '$4',
  fontSize: '$2',
});

export const FooterDev = styled('p', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  flex: 1,
  color: '$white',
  fontFamily: '$title',
  px: '$4',
  fontSize: '$2',
});

export const FooterLogo = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',

  '& img': {
    height: 150,
  },
});

export const FooterColumn = styled('div', {
  position: 'relative',
  display: 'flex',
  flex: 1,
  color: '$white',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FooterColumnBody = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
});

export const FooterColumnLink = styled('a', {
  position: 'relative',
  color: '$primary',
  cursor: 'pointer',
  fontSize: '$2',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const FooterTitle = styled('p', {
  fontFamily: '$title',
  fontWeight: 'bold',
  fontSize: '$4',
  color: '$white',
  mb: '$4',
});

export const FooterContact = styled('p', {
  color: '$white',
  mb: '$4',
  textAlign: 'center',
  fontSize: '$2',
});
