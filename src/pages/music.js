import React from "react"

import { Soundcloud, Layout, SEO, HomeButton } from '../components'

import audioStyles from "../components/styling/audio.module.css"

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <h4>Featured mix: Rinse FM</h4>
    <h4>Music for Xibis: A Galactic Voyage</h4>
    <iframe
      title="xibis-soundcloud"
      width="60%"
      height="250"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1138010866&color=%238cbc84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
      <div className={audioStyles.soundcloudPlayer}>
        <a
          href="https://soundcloud.com/madeline-url" title="madeline"
          target="_blank"
          rel="noreferrer"
          style={{
            color: `#cccccc`,
            textDecoration: `none`
          }}>
              madeline
          </a> · <a href="https://soundcloud.com/madeline-url/sets/music-for-xibis-a-galactic-voyage" title="Music for Xibis: A Galactic Voyage" target="_blank" rel="noreferrer" style={{ color: `#cccccc`, textDecoration: `none`}}>Music for Xibis: A Galactic Voyage</a></div>
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
