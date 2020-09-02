import { createContext } from 'react';

import { THEME_MODES } from './useDarkMode';

const defaultContext = {
  themeMode: THEME_MODES.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};

export const ThemeContext = createContext<{
  themeMode: THEME_MODES;
  toggleTheme: () => void;
}>(defaultContext);
