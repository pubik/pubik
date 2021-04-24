import React from 'react';

const Video = ({ videoURL }) => (
  <div>
    <iframe
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPubikAplikacja%2Fvideos%2F457263982271565%2F&show_text=0&width=560"
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
