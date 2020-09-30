import React, { FC } from 'react';
import styled from 'styled-components';

const MainBlock = styled.main`
  display: flex;
  background-color: #fff;
  position: relative;
  padding: 0 25vw;
  @media (max-width: 960px) and (orientation: landscape) {
    padding: 0 10vw;
  }
  @media (max-width: 960px) and (orientation: portrait) {
    padding: 0 3vw;
  }
`;

export const MainContainer: FC = ({ children }) => {
  return <MainBlock>{children}</MainBlock>;
};
