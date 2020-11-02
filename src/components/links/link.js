import React from "react"
import { Link } from "gatsby"

import buttonStyles from "../styling/buttons.module.css"

const TemplateLink = ({ link, children }) => (
  <Link
    className={buttonStyles.link}
    to={`/${link}/`}>
      {children}
  </Link>
)

export default TemplateLink
