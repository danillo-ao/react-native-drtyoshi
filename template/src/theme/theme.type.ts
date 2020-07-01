import {
  colors,
  fonts,
  fontsSizes,
  fontsWeights,
  unit
} from '@theme/theme.values';

/** COLORS TYPES */
export type ColorsName = 'primary' | 'blue' | 'white' | 'black' | 'error';
export type ThemeColorShade = {
  [color in ColorsName]: {
    base: string;
    lighter?: string;
    darker?: string;
  }
}
export type ThemeColors = typeof colors;
/** END OF COLORS TYPES */

/** FONTS TYPES */
export type ThemeFonts = typeof fonts;
export type ThemeFontsSizes = typeof fontsSizes;
export type ThemeFontsWeights = typeof fontsWeights;
/** END OF FONTS TYPES */

export type ThemeUnit = typeof unit;

export type Theme = {
  colors: ThemeColors,

  fonts: ThemeFonts,
  fontsSizes: ThemeFontsSizes,
  fontsWeights: ThemeFontsWeights,

  unit: ThemeUnit,
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
