import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarLinks from './NavbarLinks';
import SocialNavbarLinks from './SocialLinks';
import Logo from './Title';

const Navigation = styled.nav<{ navbarOpen: boolean }>`
  height: 11vh;
  min-height: 60px;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 15vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 960px) {
    height: 9vh;
    padding: 0 3vw;
    min-height: 70px;
    position: ${props => (props.navbarOpen ? 'sticky' : 'relative')};
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Toggle = styled.div<{ navbarOpen: boolean }>`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 960px) {
    display: flex;
    padding: 0 5vw;
    //justify-content: end;
    flex-grow: 1;
  }
`;

const Navbox = styled.div<{ open?: boolean }>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 960px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 60px;
    background-color: #fff;
    transition: all 0.3s ease-out;
    top: 70px;
    left: ${props => (props.open ? '100%' : '0')};
  }
`;

const isHamburgerActive = (open?: boolean): string => (open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)');

const Hamburger = styled.div<{ open?: boolean }>`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  margin: 0 0 0 auto;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${({ open }) => isHamburgerActive(open)};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <Navigation navbarOpen={navbarOpen}>
      <Logo />
      <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks setNavbarOpen={setNavbarOpen} />
          <SocialNavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
          <SocialNavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
