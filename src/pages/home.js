import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soundcloud from "../components/soundcloud-icon"
import Shiftpitch from "../components/shiftpitch"
import Xibis from "../components/planet"
import Shadow from "../components/shadow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      display: `flex`,
      justifyContent: `center`
    }}>
      <div className="shadow-box">
        <Shiftpitch />
        <Shadow />
      </div>
      <div className="shadow-box">
        <Xibis />
        <Shadow />
      </div>
      <div className="shadow-box">
        <Link to="/music/">
          <Soundcloud/>
        </Link>
        <Shadow />
      </div>
    </div>
  </Layout>
)


export default IndexPage
