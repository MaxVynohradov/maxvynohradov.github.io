import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { THEME_MODES, ThemeContext, useDarkMode } from '../models/theme';
import { DarkTheme, LightTheme } from '../themes';
import { MainContainer } from './MainContainer';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, html {
    font-family: ${({ theme }): string => theme.fonts.main};
    margin: 0;
    color: ${({ theme }): string => theme.colors.main.text};
    height: 100%;
    background-color: ${({ theme }): string => theme.colors.main.body};
  }
  body:active, html:active {
     transition: background-color 300ms linear;
  }
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const App: FC = ({ children }) => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === THEME_MODES.LIGHT ? LightTheme : DarkTheme;
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Navbar />
        <MainContainer>{children}</MainContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
