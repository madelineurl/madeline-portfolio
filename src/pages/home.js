import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soundcloud from "../components/soundcloud-icon"
import Shiftpitch from "../components/shiftpitch"
import Xibis from "../components/planet"
import Shadow from "../components/shadow"

import shadowStyles from "../components/styling/shadow.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      display: `flex`,
      justifyContent: `center`
    }}>
      <div className={shadowStyles.shadowBox}>
        <Shiftpitch />
        <Shadow />
      </div>
      <div className={shadowStyles.shadowBox}>
        <Xibis />
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


export default IndexPage
