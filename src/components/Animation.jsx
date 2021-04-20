import React from 'react';

import styled, { keyframes } from 'styled-components';
import ReleaseCountdown from '../components/Countdown';
import Logo1 from '../img/logo_600_noBg.png';
import { mediaSizes } from '../style/utils';

const StyledMain = styled.nav`
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
    left: 30%;
  }
`;

const anim4 = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0%;
  }
`;

const anim5 = keyframes`
  from {
    top: 30%;
  }
  to {
    top: 50%;
  }
`;

// const anim6 = keyframes`
//   from {
//     top: 30%;
//   }
//   to {
//     top: 50%;
//   }
// `;

const StyledBox1 = styled.div`
  width: 600px;
  height: 600px;
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
  ${mediaSizes.lessThan('md')`display: none;`};
  width: auto;
  height: auto;
  color: white;
  font-size: 3rem;
  ${mediaSizes.lessThan('lg')`
    font-size: 2rem;
    line-height: 3rem;
    left: 15%;
  `};
  line-height: 5rem;
  position: absolute;
  top: 30%;
  left: 20%;
  overflow: hidden;
  text-align: left;
  animation: ${anim5} 2s forwards 6s;
`;

const StyledText1 = styled.div`
  position: relative;
  left: -100%;
  animation: ${anim3} 3s forwards 3s;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 2rem;
  ${mediaSizes.lessThan('lg')`
    min-width: 200px;
  `};
  min-width: 300px;
`;

const StyledText2 = styled.div`
  position: relative;
  right: -100%;
  animation: ${anim4} 3s forwards 3s;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 2rem;
  min-width: 300px;
   ${mediaSizes.lessThan('lg')`
     min-width: 200px;
  `};
`;

const StyledBox3 = styled.div`
  ${mediaSizes.lessThan('md')`display: none;`};
  width: auto;
  height: auto;
  color: white;
  font-size: 3rem;
  line-height: 5rem;
  position: absolute;
  top: 150px;
  right: 20%;
  overflow: hidden;
  text-align: left;
  ${mediaSizes.lessThan('lg')`
    font-size: 2rem;
    line-height: 3rem;
    right: 15%;
  `};
`;

const Animation = () => (
  <StyledMain>
    <StyledBox1></StyledBox1>
    <StyledBox2>
      <StyledText1>
        <ReleaseCountdown />
      </StyledText1>
    </StyledBox2>
    <StyledBox3>
      <StyledText2>
        Pubik - Comming Soon!
      </StyledText2>
    </StyledBox3>
  </StyledMain>
);

export default Animation;
