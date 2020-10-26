import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Soundcloud from "../components/soundcloud-icon"
import Shiftpitch from "../components/shiftpitch"
import Xibis from "../components/planet"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
      <Shiftpitch />
      <Xibis />
      <Link to="/music/">
        <Soundcloud/>
      </Link>
  </Layout>
)


export default IndexPage
