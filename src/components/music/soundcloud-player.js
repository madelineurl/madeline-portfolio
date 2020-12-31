import React from "react";
import PropTypes from "prop-types";

const SoundcloudPlayer = ({ url, title }) => (
  <div className='soundcloud-player'>
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={url}
      title={title}
      >
    </iframe>
  </div>
);

SoundcloudPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SoundcloudPlayer;
