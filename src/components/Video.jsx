import React from 'react';

const Video = ({ videoURL }) => (
  <div>
    <iframe
      src={videoURL}
      width="560"
      height="315"
      style={{border:'none', overflow: 'hidden'}}
      scrolling="no"
      frameBorder="0"
      allowFullScreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
    ></iframe>
  </div>
);

export default Video;
