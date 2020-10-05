import React, { FC } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  display: flex;
  //background-color: rgba(89, 1, 137, 0.4);
  background-color: #fff;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  border-top: 2px solid rgb(89, 1, 137);
`;

const FooterText = styled.p`
  color: rgb(89, 1, 137);
  display: block;
  line-height: 28px;
  font-size: 20px;
  padding: 0 5px;
`;

export const FooterContainer: FC = () => {
  return (
    <FooterBlock>
      <FooterText> &copy; 2020 Vynohradov Maxim</FooterText>
    </FooterBlock>
  );
};
