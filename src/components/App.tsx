import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { THEME_MODES, ThemeContext, useDarkMode } from '../models/theme';
import { DarkTheme, LightTheme } from '../themes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: ${({ theme }): string => theme.fonts.main};
    color: ${({ theme }): string => theme.colors.main.text};
    height: 100%;
    background-color: ${({ theme }): string => theme.colors.main.body};
    transition: background-color 300ms linear;
  }
`;

const App: FC = ({ children }) => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === THEME_MODES.LIGHT ? LightTheme : DarkTheme;
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
