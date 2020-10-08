import React, { FC } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { THEME_MODES, ThemeContext, useDarkMode } from '../models/theme';
import { DarkTheme, LightTheme } from '../themes';
import { FooterContainer } from './Footer';
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

const GlobalContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const App: FC = ({ children }) => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === THEME_MODES.LIGHT ? LightTheme : DarkTheme;
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <GlobalContainer>
          <Navbar />
          <MainContainer>{children}</MainContainer>
          <FooterContainer />
        </GlobalContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
