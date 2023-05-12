// import { utils } from 'prettier/doc';
import { colors } from '@theme/colors';
import { fontSizes, fonts, lineHeights } from '@theme/fonts';
import { media } from '@theme/media';
import { radii } from '@theme/radii';
import { space } from '@theme/space';
import { themeMap } from '@theme/theme.map';
import { units } from '@theme/theme.units';
import { utils } from '@theme/theme.utils';
import { zIndices } from '@theme/z-indixes';

export const themeConfig = {
  theme: {
    colors,
    fonts,
    fontSizes,
    lineHeights,
    radii,
    space,
    zIndices,
    units,
  },
  media,
  utils,
  themeMap,
};
