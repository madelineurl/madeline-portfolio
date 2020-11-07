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
    {/* <p className={styles.musicBlurb}>I taught myself to DJ after getting involved with the radio station in college, and ended up working part-time as a freelance DJ and at
      <ProjectLink
        projectUrl='http://gramaphonerecords.com/'
        text='Gramaphone Records'
      /> on the weekends.
    </p> */}
    <HomeLink />
  </Layout>
)

export default Music;
