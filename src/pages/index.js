import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }}> */}
      <div>I'm a fullstack developer, radio host, and DJ/producer based in Chicago</div>
      <Image imageUrl='' />
  </Layout>
)

export default IndexPage
