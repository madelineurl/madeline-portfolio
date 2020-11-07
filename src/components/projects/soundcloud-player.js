import React from "react"
import styles from "./project.module.css"

const SoundcloudPlayer = ({ url, title }) => (
  <div className={styles.soundcloudPlayer}>
    <iframe
      width="93%"
      height="300"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={url}
      title={title}
      >
    </iframe>
  </div>
)

export default SoundcloudPlayer;
