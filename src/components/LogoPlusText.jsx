import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import { mediaSizes } from '../style/utils';

const StyledContainer = styled.div`
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  text-transform: uppercase;
  font-family: 'Pacifico';
  letter-spacing: 5px;
  padding-right: 4rem;

  ${mediaSizes.lessThan('md')`
     padding-right: 0;
  `};

  h1 {
    font-size: 4rem;
    ${mediaSizes.lessThan('md')`
       font-size: 3rem;
    `};
  }
`;

const StyledLogo = styled.img`
  height: 60%;
  ${mediaSizes.lessThan('md')`
       font-size: 3rem;
   `};
`;

const LogoPlusText = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo src={Logo} />
        <h1>Pubik</h1>
      </StyledWrapper>
      <h2>Comming Soon</h2>
      <h3>2021-06-23</h3>
    </StyledContainer>
  );
};

export default LogoPlusText;
