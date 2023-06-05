import { styled } from '@theme/theme';

export const HeroSection = styled('section', {
  width: '100%',
  display: 'flex',
  backgroundImage: 'url("/hero.jpg")',
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

export const HeroSectionFooter = styled('div', {
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'row',
  pa: '$4',
});

export const HeroSectionFooterLogos = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  gap: '$4',
  flex: 1,
});

export const HeroSectionPhraseContent = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 3,
});

export const HeroSectionPhrase = styled('p', {
  width: '100%',
  position: 'relative',
  textAlign: 'left',
  color: '$white',
  fontSize: '$4',
  fontFamily: '$title',
});

export const HeroSectionLogo = styled('img', {
  height: 50,
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
