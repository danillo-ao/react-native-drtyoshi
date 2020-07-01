import { Theme } from './theme.types';

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
