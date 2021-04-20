import React from 'react';
import Countdown from 'react-countdown';

const ReleaseCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'The app is now available.';
    } else {
      // Render a countdown
      return (
        <>
          <div>{days} days</div>
          <div>{hours} hours</div>
          <div>{minutes} minutes</div>
          <div>{seconds} seconds</div>
        </>
      );
    }
  };
  return <Countdown date={new Date('2021-06-23T17:00:00')} renderer={renderer} />;
};

export default ReleaseCountDown;
