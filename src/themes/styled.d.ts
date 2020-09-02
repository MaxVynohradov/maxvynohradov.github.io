import { ColorsScheme } from 'styled-components';

interface ColorsScheme {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
}

export interface CustomTheme {
  border: {
    radius: string;
  };
  colors: {
    main: ColorsScheme;
    secondary: ColorsScheme;
  };
  fonts: {
    main: string;
    code: string;
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
