import { useCallback, useEffect, useState } from 'react';

export enum THEME_MODES {
  LIGHT = 'light',
  DARK = 'dark',
}

const LOCAL_STORAGE_KEY = 'theme';

export const useDarkMode = (): [THEME_MODES, () => void] => {
  const [theme, setTheme] = useState<THEME_MODES>(THEME_MODES.LIGHT);

  const setMode = (mode: THEME_MODES) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, mode);
    setTheme(mode);
  };

  const themeToggler = useCallback(
    (): void => (theme === THEME_MODES.LIGHT ? setMode(THEME_MODES.DARK) : setMode(THEME_MODES.LIGHT)),
    [theme],
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    setTheme((localTheme ?? THEME_MODES.LIGHT) as THEME_MODES); // localTheme &&
  }, []);
  return [theme, themeToggler];
};
