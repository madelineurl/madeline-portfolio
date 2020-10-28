import React from "react"
import { Link } from "gatsby"

import buttonStyles from "./styling/buttons.module.css"

const HomeButton = () => (
  <Link className={buttonStyles.link} to="/home/">home</Link>
)

export default HomeButton
