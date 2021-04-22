import React from 'react';
import { FacebookFilled, InstagramFilled, MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import { mediaSizes } from '../style/utils';

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
    list-style: none;
    width: 100%;
    justify-content: center;

    & div:last-child {
      margin: auto;
    }

    li {
      margin: 0 1rem;
      padding: 1rem;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #f4f4f4;

        span {
          font-size: 1.5rem;
          color: white;
        }
      }

      a:hover {
        color: #d9b036;
      }
    }
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

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo src={Logo} />
      <StyledLogoName>Pubik</StyledLogoName>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
          <li>
          <a href="#demo">Demo</a>
        </li>
        <li>
          <a href={'https://www.facebook.com/PubikAplikacja'} target="_blank" rel="noreferrer">
            <FacebookFilled />
          </a>
        </li>
        <li>
          <a href={'https://www.facebook.com/PubikAplikacja'} target="_blank" rel="noreferrer">
            <InstagramFilled />
          </a>
        </li>
      </ul>
        <Bars />
    </StyledNavbar>
  );
};

export default Navbar;
