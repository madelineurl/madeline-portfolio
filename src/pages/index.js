import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image style={{
      marginBottom: `10rem`
    }}/>
  </Layout>
)

export default IndexPage
