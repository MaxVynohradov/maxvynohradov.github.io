import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 960px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Logo = () => {
  return (
    <TitleWrap>
      <h1>Vynohradov Blog</h1>
    </TitleWrap>
  );
};

export default Logo;
