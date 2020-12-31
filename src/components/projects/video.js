import React from "react";
import PropTypes from "prop-types";

const Video = ({ videoURL, videoTitle }) => (
  <>
    <iframe
      className='video'
      src={videoURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </>
);

Video.propTypes = {
  videoURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired
};

export default Video;
