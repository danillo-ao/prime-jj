import { styled } from '@theme/theme';

export const HeroSection = styled('section', {
  width: '100%',
  display: 'flex',
  backgroundImage:
    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/GABRIEL_VELLA_vs_ROMINHO_51.jpg/1200px-GABRIEL_VELLA_vs_ROMINHO_51.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: 'calc(100vh - 40px)',

  '&:before': {
    content: '',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    bg: '$grey900',
    opacity: 0.7,
  },
});

export const HeroSectionContent = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const HeroSectionContentLogos = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '$10',
});

export const HeroSectionPhrase = styled('p', {
  width: '100%',
  maxWidth: 500,
  position: 'relative',
  textAlign: 'center',
  color: '$white',
  my: '$10',
  fontSize: '$4',
});

export const HeroSectionButtons = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeroSectionContentLogo = styled('img', {
  height: 220,
  objectFit: 'contain',
  objectPosition: 'center',
});

export const BlackBeltContent = styled('div', {
  width: '100%',
  position: 'relative',
});

export const BlackBeltNameWrapper = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
});

export const BlackBeltNameContent = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1,
});

export const BlackBeltName = styled('p', {
  color: '$white',
  padding: '$0',
  margin: '$0',
  textTransform: 'uppercase',
  opacity: 0.5,
  fontFamily: '$title',
});
