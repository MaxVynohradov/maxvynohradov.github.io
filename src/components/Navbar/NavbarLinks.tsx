import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  letter-spacing: 1px;

  white-space: nowrap;
  margin: 0 1vw;
  height: 3vm;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    content: '.';
    color: transparent;
    background: #ab74cd;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #ab74cd;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    padding: 0 0 40px 0;
    font-size: 1.5rem;
    z-index: 6;
    :after {
      bottom: 20px;
    }
  }
`;

const NavbarLinks: FC<{ setNavbarOpen?: (flag: boolean) => void }> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNavbarOpen = () => {},
}: {
  // eslint-disable-next-line react/require-default-props
  setNavbarOpen?: (text: boolean) => void;
}) => {
  return (
    <>
      <NavItem to="/blog" onClick={() => setNavbarOpen(false)}>
        Blog
      </NavItem>
      <NavItem to="/me" onClick={() => setNavbarOpen(false)}>
        About Me
      </NavItem>
    </>
  );
};

export default NavbarLinks;
