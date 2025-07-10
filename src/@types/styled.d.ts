/* eslint-disable @typescript-eslint/no-empty-object-type */

import 'styled-components';
import type { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
