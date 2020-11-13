import React from 'react'
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
        <Shiftpitch link='/shiftpitch/'/>
        <Shadow />
      </div>
      <div className={styles.shadowBox}>
        <Planet link='/xibis/'/>
        <Shadow />
      </div>
      <div className={styles.shadowBox}>
        <Link to="/music/">
          <Soundcloud/>
        </Link>
        <Shadow />
      </div>
    </div>
  )
}

export default ListProjects;
