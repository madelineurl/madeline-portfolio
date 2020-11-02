import React from "react"

import videoStyles from "../styling/video.module.css"

const Video = ({ videoURL, videoTitle }) => (
  <>
    <iframe
      className={videoStyles.video}
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
