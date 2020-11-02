import React from "react"
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
export default Video
