import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styled from 'styled-components';

const NavSocialItem = styled.a`
  text-decoration: none;
  color: #111;
  display: block;
  white-space: nowrap;
  margin: 0 1.2vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 2rem;

  :hover {
    color: #ab74cd;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 40px 0;
    margin: 0 4vw;
    font-size: 3rem;
    z-index: 6;
  }
`;

const SocialLinksContainer = styled.div<{ open?: boolean }>`
  display: flex;
  position: relative;
  height: 100%;
  justify-self: flex-end;
  align-items: center;

  @media (max-width: 960px) {
    margin-top: auto;
    justify-content: center;
    position: fixed;
    width: 100%;
  }
`;

const SocialNavbarLinks: FC = () => {
  return (
    <SocialLinksContainer>
      <NavSocialItem href="https://github.com/MaxVynohradov">
        <FontAwesomeIcon icon={faGithub} />
      </NavSocialItem>
      <NavSocialItem href="https://www.linkedin.com/in/max-vynohradov/">
        <FontAwesomeIcon icon={faLinkedin} />
      </NavSocialItem>
      <NavSocialItem href="https://twitter.com/max_vynohradov">
        <FontAwesomeIcon icon={faTwitter} />
      </NavSocialItem>
      <NavSocialItem href="https://www.instagram.com/vynohradov.max/">
        <FontAwesomeIcon icon={faInstagram} />
      </NavSocialItem>
    </SocialLinksContainer>
  );
};

export default SocialNavbarLinks;
