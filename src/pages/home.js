import React from "react"
import { Link } from "gatsby"
import styles from "../components/icons/icons.module.scss"

import {
  Layout,
  SEO,
  Shiftpitch,
  Soundcloud,
  Planet,
  Shadow
} from "../components"

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="home" />
    <div className={styles.navIconContainer}>
      <div className={styles.shadowBox}>
        <Shiftpitch link='/music/'/>
        <Shadow label='MUSIC' />
      </div>
      <div className={styles.shadowBox}>
        <Planet link='/projects/'/>
        <Shadow label='PROJECTS'/>
      </div>
      <div className={styles.shadowBox}>
        <Link to="/skills/">
          <Soundcloud/>
        </Link>
        <Shadow label='SKILLS' />
      </div>
    </div>
  </Layout>
)
}


export default IndexPage
