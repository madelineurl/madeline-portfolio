import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Xibis = () => (
  <Layout>
    <SEO title="Xibis" />
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
          <a
            className='project-button'
            href="xibi.space"
            target="_blank"
            rel="noreferrer"
              >Play
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

export default Xibis