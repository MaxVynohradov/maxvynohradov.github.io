import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { THEME_MODES, ThemeContext } from '../models/theme';

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.main.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 2.5rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.main.background};
  color: ${({ theme }) => theme.colors.main.text};
  }
`;

export const Toggle: FC = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme}>
      {themeMode === THEME_MODES.LIGHT ? 'Light ' : 'Dark '}
      Mode
    </Button>
  );
};
