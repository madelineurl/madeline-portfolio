import React from "react"
import Img from "gatsby-image"

import iconStyles from "./styling/icons.module.css"

const Icon = ({ url, name, image}) => (
  <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <Img
          fixed={image}
          alt={`${name}-icon`}
          className={iconStyles.icon}
        />
  </a>
)

export default Icon
