import React from "react"
import { Link } from "gatsby"
//import anime from "animejs"

import shadowStyles from "../components/styling/shadow.module.css"
import iconStyles from "../components/styling/icons/icons.module.scss"

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
    <SEO title="Home" />
    <div className={iconStyles.navIconContainer}>
      <div className={shadowStyles.shadowBox}>
        <Shiftpitch/>
        <Shadow />
      </div>
      <div className={shadowStyles.shadowBox}>
        <Planet />
        <Shadow />
      </div>
      <div className={shadowStyles.shadowBox}>
        <Link to="/music/">
          <Soundcloud/>
        </Link>
        <Shadow />
      </div>
    </div>
  </Layout>
)
}


export default IndexPage
