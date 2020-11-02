import React from "react"
import styles from "./link.module.css"

const ProjectLink = ({ projectUrl, text}) => (
  <a
    className={styles.link}
    target="_blank"
    rel="noreferrer"
    href={projectUrl}
  >
    {text}
  </a>
)

export default ProjectLink
