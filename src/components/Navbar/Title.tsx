import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TitleWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 960px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: #111;
`;

const Logo = () => {
  return (
    <TitleWrap>
      <LogoLink to="/">
        <h1>Vynohradov Blog</h1>
      </LogoLink>
    </TitleWrap>
  );
};

export default Logo;
