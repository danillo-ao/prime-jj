import { styled } from '@theme/theme';

export const GallerySection = styled('section', {
  width: '100%',
  position: 'relative',
  bg: '$grey800',
});

export const GallerySectionBackground = styled('div', {
  position: 'absolute',
  width: '120%',
  height: '100%',
  left: '-10%',
  top: '-0%',
  transform: 'rotate(-3deg)',
  bg: '$grey800',
});

export const GalleryContent = styled('div', {
  width: '100%',
  pt: 60,
  pb: 80,
});

export const GalleryGrid = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '$5',
  gridRowGap: '$5',

  '@800': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

export const GalleryImage = styled('img', {
  width: '100%',
  borderRadius: '$1',
  cursor: 'pointer',
  transition: '0.5s',
  aspectRatio: '1.2/1',
  objectFit: 'cover',
  objectPosition: 'center',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 0px 15px rgba(24,36,50, 0.9)',
  },
});

export const GalleryFullScreen = styled('div', {
  width: '100%',
  height: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  bg: 'rgba(0,0,0,0.9)',
  zIndex: '$modal',
  transition: '0.5s',

  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    visible: {
      true: { display: 'flex' },
      false: { display: 'none' },
    },
  },
});

export const GalleryFullBackdrop = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: '$1',
});

export const GalleryFullImageContent = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const GalleryFullImageCloseButton = styled('button', {
  position: 'relative',
  pa: '$2',
  borderRadius: '$2',
  bg: '$background3',
  color: '$white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  transition: '0.2s',
  alignSelf: 'flex-end',

  '& svg': {
    width: 20,
    height: 20,
  },

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 0px 15px rgba(1, 173, 238, 0.5)',
  },
});

export const GalleryFullImageContentBody = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  my: '$4',
  gap: '$4',
});

export const GalleryFullImageContentBodyAction = styled('div', {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: '$2',

  '@600': {
    display: 'none',
  },
});

export const GalleryFullImageContentBodyImageContent = styled('div', {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  maxWidth: '90%',
  zIndex: '$2',
});

export const GalleryFullImageContentBodyImage = styled('img', {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '100%',
  borderRadius: '$1',
  mt: '$4',
  maxHeight: '80vh',
});

export const GalleryFullImageContentBodyButton = styled('button', {
  position: 'relative',
  borderRadius: '$pill',
  bg: '$background3',
  color: '$white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  transition: '0.2s',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,

  '& svg': {
    width: 20,
    height: 20,
  },

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 0px 15px rgba(1, 173, 238, 0.5)',
  },
});
