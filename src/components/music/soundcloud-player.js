import React from "react";
import PropTypes from "prop-types";

export const SoundcloudPlayer = ({ url, title }) => (
  <div className='soundcloud-player'>
    <iframe
      width="700"
      height="150"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={url}
      title={title}
      >
    </iframe>
    {/* <div style={{
      fontSize: '10px',
      color: '#cccccc',
      lineBreak: 'anywhere',
      wordBreak: 'normal',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,Garuda,Verdana, Tahoma, sansSerif',
      fontWeight: 100
      }}
      >
      <a
        href="https://soundcloud.com/smartbarchicago"
        title="smartbar Chicago"
        target="_blank"
        style={{ Color: '#cccccc', textDecoration: 'none'}}>
          smartbar Chicago
      </a> ·
      <a href="https://soundcloud.com/smartbarchicago/smart-mix-67-madeline" title="Smart Mix 67: Madeline" target="_blank" style="color: #cccccc; text-decoration: none;">
          Smart Mix 67: Madeline
      </a></div> */}
  </div>
);

SoundcloudPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SoundcloudPlayer;
