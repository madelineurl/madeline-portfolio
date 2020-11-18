import React from "react"
import PropTypes from "prop-types"
import styles from "./project.module.css"

const Video = ({ videoURL, videoTitle }) => (
  <>
    <iframe
      className={styles.video}
      src={videoURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </>
)

Video.propTypes = {
  videoURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired
}

export default Video
