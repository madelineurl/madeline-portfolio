import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ url, image }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="flex"
  >
    <img
      src={image}
      alt='social media icon'
      className='footer-icon'
    />
  </a>
);

SocialIcon.propTypes = {
  image: PropTypes.string.isRequired
};

export default SocialIcon;
