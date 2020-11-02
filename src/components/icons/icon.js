import React from "react"
import Img from "gatsby-image"
import styles from "./icons.module.scss"

const Icon = ({ url, name, image}) => (
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

export default Icon
