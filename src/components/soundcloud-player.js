import React from "react";
import PropTypes from "prop-types";
import ReactAudioPlayer from 'react-audio-player';

export const SoundcloudPlayer = ({ url, title }) => {
  return (
    <ReactAudioPlayer
      src={url}
      controls
      className="audio-player"
      id="audio"
    />
  )
};

SoundcloudPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SoundcloudPlayer;
