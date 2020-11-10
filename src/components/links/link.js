import React from "react"
import { Link } from "gatsby"
import styles from "./link.module.css"

const TemplateLink = ({ link, children }) => (
  <Link
    className={styles.link}
    to={link}>
      {children}
  </Link>
)

export default TemplateLink
