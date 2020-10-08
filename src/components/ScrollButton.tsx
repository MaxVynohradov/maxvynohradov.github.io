import React, { FC } from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from 'styled-components';

const ScrollButtonContent = styled.p`
  opacity: 0.4;
  transition: opacity 200ms ease-in;
  :hover {
    opacity: 0.9;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;

export const ScrollButton: FC = () => {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 40,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
      }}
    >
      <ScrollButtonContent>▲ UP</ScrollButtonContent>
    </ScrollToTop>
  );
};
