import React, { FC } from 'react';
import styled from 'styled-components';

import { ScrollButton } from './ScrollButton';

const MainBlock = styled.main`
  flex: 1;
  display: flex;
  background-color: #fff;
  position: relative;
  padding: 0 30vw;
  @media (max-width: 1450px) {
    padding: 0 23vw;
  }
  @media (max-width: 960px) and (orientation: landscape) {
    padding: 0 10vw;
  }
  @media (max-width: 960px) and (orientation: portrait) {
    padding: 0 3vw;
  }
`;

export const MainContainer: FC = ({ children }) => {
  return (
    <MainBlock>
      {children}
      <ScrollButton />
    </MainBlock>
  );
};
