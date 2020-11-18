import React from "react"
import styles from "./music.module.css"

const MusicBlurb = () => {
  return (
    <div className={styles.musicBlurb}>
      <div>I've been DJing for seven years; it's where my self-teaching journey began. I taught myself to DJ after getting involved with the radio station at Northwestern, and ended up working part-time as a freelance DJ and at <a href='https://www.gramaphonerecords.com/' alt='link to gramaphone records website'>Gramaphone Records</a> on the weekends. Learning to DJ and set up equipment helped me get familiar with music technology and gain confidence in my technical abilities.</div>
      <div>I host a weekly radio show, Statement Piece, from 12-1am CST on WNUR 89.3FM (<a href='https://wnur.org/' alt='link to wnur website'>wnur.org</a>). I was the General Manager at WNUR for almost two years, and got my first taste of web development overhauling the station's website at that time.
      </div>
      <div>I've played guitar on and off since I was twelve, and I recently committed to teaching myself music theory on piano. I've since been producing more original work in the form of ambient synth pieces, post-punk drum machine EPs, and deep vocal house projects.
      </div>
      <div>Venues I've played around Chicago: </div>
        <div>Smartbar</div>
        <div>Berlin</div>
        <div>Punch House</div>
        <div>The Aragon</div>
        <div>Danny's Tavern</div>
        <div>Cafe Mustache</div>
        <div>The Hideout</div>
    </div>
  )
}

export default MusicBlurb
