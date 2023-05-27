import { globalCss } from '@theme/theme';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$default',
  },
  body: {
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    bg: '$background0',
  },
});
