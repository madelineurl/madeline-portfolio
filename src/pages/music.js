import React from "react"

import Soundcloud from '../components/soundcloud-icon'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Music = () => (
  <Layout>
    <SEO title="music" />
    <h4>Featured mix: Rinse FM</h4>
    <h4>Music for Xibis: A Galactic Voyage</h4>
    <h4>The Unbearable Charm</h4>
    <a href="https://soundcloud.com/madeline-url" aria-label="link to soundcloud"><Soundcloud /></a>
  </Layout>
)

export default Music
