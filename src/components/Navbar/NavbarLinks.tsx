import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: block;
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
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
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
      <NavItem to="/" onClick={() => setNavbarOpen(false)}>
        Blog
      </NavItem>
      <NavItem to="/me" onClick={() => setNavbarOpen(false)}>
        About Me
      </NavItem>
    </>
  );
};

export default NavbarLinks;
