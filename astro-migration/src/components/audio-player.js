import PropTypes from 'prop-types';

export const AudioPlayer = ({ url, title }) => {
  return null
    // <ReactAudioPlayer
    //   src={url}
    //   controls
    //   className='audio-player'
    //   id='audio'
    // />
  //)
};

AudioPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default AudioPlayer;
