import React from "react"
import { Soundcloud, Layout, SEO, HomeLink } from '../components'
import styles from "../components/projects/project.module.css"

const Music = () => (
  <Layout>
    <SEO title="Music" />
    <p>I taught myself to DJ after getting involved with the radio station in college, and ended up working part-time as a freelance DJ and at  <a
        href='http://gramaphonerecords.com/'
        target="_blank"
        rel="noreferrer">
          Gramaphone Records
      </a> on the weekends. </p>
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
      <div className={styles.soundcloudPlayer}>
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
    <HomeLink />
  </Layout>
)

export default Music
