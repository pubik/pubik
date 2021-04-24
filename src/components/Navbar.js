import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';
import Logo from '../img/logo.png';
import { mediaSizes } from '../style/utils';
import NavItems from './NavItems';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);

  ul {
    ${mediaSizes.lessThan('sm')`
        display: none;
    `};
    display: flex;
  }
`;

const StyledLogo = styled.img`
  height: 90%;
`;

export const Bars = styled(MenuOutlined)`
  display: none;
  color: #fff;
  ${mediaSizes.lessThan('sm')`
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 1.8rem;
    cursor: pointer;
  `}
`;
const StyledLogoName = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Pacifico';
`;

const StyledToggleMenu = styled.div`
  ${mediaSizes.greaterThan('sm')`
     display: none;
     transform: translate(-100%);
  `};
  ${({ toggled }) => !toggled && 'display: none'}
  ${({ toggled }) =>
    toggled &&
    css`
      transform: translate(0px);
      transition: transform 250ms ease-in-out;
      position: absolute;
      top: 60px;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 1;
      background-color: #734d26;
      opacity: 95%;
      padding: 1rem;
      
      ul {
        text-align: center;
        font-size: 1.5rem;
        
        li a span {
          font-size: 2rem;
        }
      }
    `}
`;

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <StyledToggleMenu toggled={toggled}>
        <NavItems closeMenu={() => setToggled(false)}/>
      </StyledToggleMenu>
      <StyledNavbar>
        <StyledLogo src={Logo} />
        <StyledLogoName>Pubik</StyledLogoName>
        <NavItems closeMenu={() => setToggled(false)}/>
        <Bars onClick={() => setToggled(!toggled)} />
      </StyledNavbar>
    </>
  );
};

export default Navbar;
