import React from "react"
import { SoundcloudPlayer, Layout, SEO, HomeLink } from '../components'
import styles from "../components/projects/project.module.css"

const Music = () => (
  <Layout>
    <SEO title="music" />
    <div className={styles.musicContainer}>
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1138010866&color=%238cbc84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="xibis-soundcloud"
      />
       <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/789666967&color=%238cbc84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="doubtful baby clip"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396390183&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="highlight mix"
      />
    </div>
    <div className={styles.musicBlurb}>I've been DJing for seven years. I taught myself to DJ after getting involved with the radio station at Northwestern University, and ended up working part-time as a freelance DJ and at
      <a
        href='https://www.gramaphonerecords.com/'
        text='Gramaphone Records'
      /> on the weekends. I host a weekly radio show, Statement Piece, from 12-1am CST on WNUR 89.3FM (wnur.org). I was the General Manager at WNUR for almost two years, and got my first taste of web development overhauling the station's website at that time.
    </div>
    <div className={styles.musicBlurb}>I've played guitar on and off since I was twelve, and I recently committed to teaching myself music theory on piano. I've since been producing more original work in the form of ambient synth pieces, post-punk drum machine EPs, and deep vocal house projects.
    </div>
    <div>Venues I've played around Chicago: </div>
    <HomeLink />
  </Layout>
)

export default Music;
