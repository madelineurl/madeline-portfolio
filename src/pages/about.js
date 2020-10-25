import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div style={{
      marginTop: `3rem`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`
    }}>
      <Image />
      I'm a self-directed learner. I taught myself to DJ after getting involved with the radio station in college, and ended up working part-time as a freelance DJ and at <a href='http://gramaphonerecords.com/'>Gramaphone Records</a> on the weekends. I spent a few months obsessively teaching myself music theory just before I picked up Javascript.
    </div>
  </Layout>
)

export default About
