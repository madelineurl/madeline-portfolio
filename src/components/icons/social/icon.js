import React from "react";
import PropTypes from "prop-types";
// import Img from "gatsby-image";
import styles from "../icons.module.css";

const SocialIcon = ({ url, image}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={image}
      alt='social icon'
      className={styles.footerIcon}
    />
  </a>
);

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SocialIcon;
