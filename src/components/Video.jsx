import React from 'react';

const Video = ({ videoURL }) => (
  <div>
    <iframe
      width="560"
      height="315"
      src={videoURL}
      title="Pubik"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default Video;
