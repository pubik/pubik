import React from 'react';
import styled from 'styled-components';
import { mediaSizes } from '../style/utils';

const StyledWrapper = styled.div`
  width: 50%;
  ${mediaSizes.lessThan('md')`
     width: 100%;
  `};
  ${mediaSizes.between('md', 'lg')`
     width: 75%;
  `};
  ${mediaSizes.between('lg', 'xl')`
     width: 65%;
  `};
  ${mediaSizes.greaterThan('xl')`
      width: 50%;
  `}
  ${mediaSizes.greaterThan('xxl')`
      width: 40%;
  `}
  
`;
const Video = ({ videoURL }) => (
  <StyledWrapper>
    <iframe
      width="100%"
      height="315"
      src={videoURL}
      title="Pubik"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </StyledWrapper>
);

export default Video;
