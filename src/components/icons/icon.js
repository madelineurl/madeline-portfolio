import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ url, image}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={image}
      alt='social icon'
      className='footer-icon'
    />
  </a>
);

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SocialIcon;
