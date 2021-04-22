import React from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';
import { mediaSizes } from '../style/utils';

const StyledCountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Mono';
  //background: radial-gradient(#ffcc66, transparent);
  font-weight: bold;
  border-radius: 3px;
  box-sizing: border-box;
`;

const StyledCol = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: radial-gradient(rgba(222, 157, 29), transparent);
  border-radius: 4px;
  margin: 1rem;
  min-width: 10rem;

  ${mediaSizes.lessThan('xl')`
    min-width: 5rem;
  `};
  ${mediaSizes.lessThan('lg')`
    min-width: 2rem;
  `};
  ${mediaSizes.lessThan('md')`
    min-width: 2rem;
    padding: 1rem;
    margin: 0.5rem;
  `};
`;

const StyledUnit = styled.div`
  font-size: 1.5rem;
  ${mediaSizes.lessThan('lg')`
    font-size: 1rem;
    left: 0%;
  `};
  text-transform: uppercase;
`;
const StyledValue = styled.div`
  font-size: 4rem;
  ${mediaSizes.lessThan('lg')`
    font-size: 3rem;
    left: 0%;
  `};
`;

const ReleaseCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'The app is now available.';
    } else {
      // Render a countdown
      return (
        <StyledCountdownWrapper>
          <StyledCol>
            <StyledValue>{days}</StyledValue>
            <StyledUnit>days</StyledUnit>
          </StyledCol>
          <StyledCol>
            <StyledValue>{hours}</StyledValue>
            <StyledUnit>hours</StyledUnit>
          </StyledCol>
          <StyledCol>
            <StyledValue>{minutes}</StyledValue>
            <StyledUnit>minutes</StyledUnit>
          </StyledCol>
          <StyledCol>
            <StyledValue>{seconds}</StyledValue>
            <StyledUnit>seconds</StyledUnit>
          </StyledCol>
        </StyledCountdownWrapper>
      );
    }
  };
  return <Countdown date={new Date('2021-06-23T17:00:00')} renderer={renderer} />;
};

export default ReleaseCountDown;
