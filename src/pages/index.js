import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Image style={{
      marginBottom: `10rem`
    }}/> */}
    <div style={{
      display: `flex`,
      justifyContent: `center`
    }}>
      <div>
        <Video
          title='Xibis: A Galactic Voyage'
          videoURL="https://www.youtube.com/embed/8HAfJqLG-sg"/>
        <div style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`
        }}>
          <a href="xibi.space">Play</a>
          <a href="https://github.com/zelda-capstone/xibis">Github</a>
      </div>
    </div>
      <div>
      <Video
        title='Shiftpitch'
        videoURL="https://www.youtube.com/embed/AAS2sIXPpY4" />
        <div style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`
        }}>
          <a href="https://shiftpitch.herokuapp.com/">Play</a>
          <a href="https://github.com/zelda-capstone/xibis">Github</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
