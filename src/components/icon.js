import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ url, image, id }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="flex"
  >
    <img
      src={image}
      id={id ?? null}
      alt='social media icon'
      className='footer-icon'
    />
  </a>
);

SocialIcon.propTypes = {
  image: PropTypes.string.isRequired
};

export default SocialIcon;
