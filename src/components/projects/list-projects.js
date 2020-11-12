import React from 'react'
// import { Link } from 'gatsby'
import { Link } from "gatsby"
import styles from "../icons/icons.module.scss"

import {
  Shiftpitch,
  Soundcloud,
  Planet,
  Shadow
} from ".."

const ListProjects = () => {
  return (
    <div className={styles.navIconContainer}>
      <div className={styles.shadowBox}>
        <Shiftpitch link='/music/'/>
        <Shadow />
      </div>
      <div className={styles.shadowBox}>
        <Planet link='/projects/'/>
        <Shadow />
      </div>
      <div className={styles.shadowBox}>
        <Link to="/skills/">
          <Soundcloud/>
        </Link>
        <Shadow />
      </div>
    </div>
  )
}

export default ListProjects;
