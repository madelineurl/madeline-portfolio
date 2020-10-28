import React from "react"

import { Soundcloud, Layout, SEO, HomeButton } from '../components'

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <h4>Featured mix: Rinse FM</h4>
    <h4>Music for Xibis: A Galactic Voyage</h4>
    <h4>The Unbearable Charm</h4>
    <a
      href="https://soundcloud.com/madeline-url"
      aria-label="link to soundcloud"
      target="_blank"
      rel="noreferrer">
        <Soundcloud />
    </a>
    <HomeButton />
  </Layout>
)

export default Music
