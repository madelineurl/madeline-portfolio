import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Shiftpitch = () => (
  <Layout>
    <SEO title="Shiftpitch" />
    <div style={{
      display: `flex`,
      justifyContent: `center`
    }}>
      <div>
      <Video
        title='Shiftpitch'
        videoURL="https://www.youtube.com/embed/AAS2sIXPpY4" />
        <div style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`
        }}>
          <a
            href="https://shiftpitch.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Play
          </a>
          <a
            href="https://github.com/zelda-capstone/xibis"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Shiftpitch
