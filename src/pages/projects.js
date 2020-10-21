import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <div style={{
      display: `flex`
    }}>
      <h4>Xibis: A Galactic Voyage</h4>
      <p>Description here</p>
      <a href="xibi.space">Play the game</a>
      <a href="https://github.com/zelda-capstone/xibis">Github repo</a>
      <a href="https://www.youtube.com/watch?v=8HAfJqLG-sg&list=PLx0iOsdUOUmnRX8RIOz1jje7KDi4CI1oh&index=5&t=0s&ab_channel=FullstackAcademy">Video pitch</a>
    </div>
    <div style={{
      display: `flex`
    }}>
      <h4>shiftpitch</h4>
      <p>Description here</p>
      <a href="https://shiftpitch.herokuapp.com/">Use the tool</a>
      <a href="https://github.com/zelda-capstone/xibis">Github repo</a>
      <a href="https://www.youtube.com/watch?v=AAS2sIXPpY4&feature=youtu.be">Video pitch</a>
    </div>
  </Layout>
)

export default Projects
