import React from 'react';
import styled from 'styled-components';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';

export const StyledList = styled.ul`
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
`;

const NavItems = ({ closeMenu }) => (
  <StyledList>
    <li onClick={() => closeMenu()}>
      <a href="#home">Home</a>
    </li>
    <li onClick={() => closeMenu()}>
      <a href="#about">About</a>
    </li>
    <li onClick={() => closeMenu()}>
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
  </StyledList>
);

export default NavItems;
