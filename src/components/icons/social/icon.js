import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styles from "../icons.module.scss"

const SocialIcon = ({ url, name, image}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    <Img
      fixed={image}
      alt={`${name}-icon`}
      className={styles.icon}
    />
  </a>
)

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default SocialIcon;
