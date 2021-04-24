import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReleaseCountdown from '../components/Countdown';
import Logo1 from '../img/logo_600_noBg.png';
import { mediaSizes } from '../style/utils';

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  ${mediaSizes.lessThan('md')`display: none;`};
`;

const anim1 = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 20%;
  }
`;

const anim2 = keyframes`
  from {
    width: 600px;
  }
  to {
    width: 0;
  }
`;

const anim3 = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
`;

const anim5 = keyframes`
  from {
    top: 30%;
  }
  to {
    top: 60%;
  }
`;

const anim6 = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 10%;
  }
`;

const StyledBox1 = styled.div`
  width: 600px;
  height: 600px;
  font-size: 5rem;
  background-image: url(${Logo1});
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: -100%;
  animation: ${anim1} 2s forwards, ${anim2} 3s forwards 3s;

  &:after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background-image: url(${Logo1});
    left: 0px;
    z-index: -1;
  }
`;
const StyledBox2 = styled.div`
  width: 100%;
  height: auto;
  color: white;
  position: absolute;
  top: 30%;
  left: 0%;
  animation: ${anim5} 2s forwards 6s;
`;

const StyledText1 = styled.div`
  width: 60%;
  margin: auto;
  position: relative;
  left: -100%;
  animation: ${anim3} 3s forwards 3s;
  padding: 0 10rem;
  text-transform: uppercase;
  line-height: 4rem;
  box-sizing: border-box;

  ${mediaSizes.lessThan('lg')`
    line-height: 3rem;
    width: 80%
  `};
`;

export const StyledLogoContainer = styled.div`
  position: absolute;
  top: -100%;
  margin: auto;
  animation: ${anim6} 2s forwards 5s;
  width: 100%;
`;

const Animation = ({ logo, releaseDate }) => {
  const Logo = logo;
  return (
    <StyledMain>
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledBox1></StyledBox1>
      <StyledBox2>
        <StyledText1>
          <ReleaseCountdown releaseDate={releaseDate}/>
        </StyledText1>
      </StyledBox2>
    </StyledMain>
  );
};

export default Animation;
