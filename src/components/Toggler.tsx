import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../models/theme';

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.main.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
  }
`;

const Toggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;
