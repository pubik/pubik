import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import { mediaSizes } from '../style/utils';
import moment from 'moment';

const StyledContainer = styled.div`
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    ${mediaSizes.lessThan('md')`
       font-size: 1.5rem;
    `};
    
  }
  h3 {
    padding-top: 1rem;
    font-size: 2.5rem;
    ${mediaSizes.lessThan('md')`
       font-size: 1.5rem;
    `};
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
  overflow-wrap: break-word;
  
  h1, h2, h3 {
    word-break: break-all;
  }


  ${mediaSizes.lessThan('md')`
     padding-right: 1rem;
  `};

  h1 {
    font-size: 4rem;
    ${mediaSizes.lessThan('md')`
       font-size: 2rem;
    `};
  }
`;

const StyledLogo = styled.img`
  height: 60%;
  ${mediaSizes.lessThan('md')`
       font-size: 3rem;
   `};
`;

const LogoPlusText = ({ title, description, releaseDate}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo src={Logo} />
        <h1>{title}</h1>
      </StyledWrapper>
      <h2>{description}</h2>
      <h3>{moment(releaseDate).format('DD.MM.YYYY')}</h3>
    </StyledContainer>
  );
};

export default LogoPlusText;
