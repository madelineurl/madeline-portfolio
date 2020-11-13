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
      <div className={styles.container}>
        <Shiftpitch link='/shiftpitch/'/>
        {/* <div>SHIFTPITCH</div> */}
      </div>
      <div className={styles.container}>
        <Planet link='/xibis/'/>
        {/* <div>XIBIS</div> */}
      </div>
    </div>
  )
}

export default ListProjects;
