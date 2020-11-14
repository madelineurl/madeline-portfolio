import React from "react"
// import { Link } from "gatsby"
import { Layout, SEO, Project } from "../components"
import styles from "../components/projects/project.module.css"
// import linkStyles from "../components/links/link.module.css"

const Shiftpitch = () => (
  <Layout>
    <SEO title='shiftpitch' />
    {/* <h3>shiftpitch</h3> */}
    <div className={styles.container}>
      <div>
        {/* <div className={styles.projectMain}>
          <h3 className={styles.projectHeader}>project: SHIFTPITCH</h3>
        </div> */}
        <h3>shiftpitch</h3>
        <div className={styles.projectBlurb}>Shiftpitch is a tool for improving rhythm by learning beatmatching. In the early days of DJing, matching tempos with your ears was the only way to blend tracks together seamlessly. Today, there are online tools, computer programs, and digital DJ equipment that teach people how to DJ, but most of them teach DJs to rely on visual cues like waveforms or BPM (beats per minute) counters instead of their ears. Learning to beatmatch <em>the old fashioned way</em> is an invaluable skill as a DJ, and a great way to improve your rhythm more generally, but learning is difficult without turntables. I built Shiftpitch in an effort to make beatmatching more accessible to everyone. </div>
        <Project
            videoTitle="Shiftpitch"
            videoURL="https://www.youtube.com/embed/AAS2sIXPpY4"
            github="https://github.com/zelda-capstone/xibis"
            siteURL="https://shiftpitch.herokuapp.com/"
          />
          {/* <Link className={linkStyles.link} to='/projects'>back</Link> */}
      </div>
      <div>
      <h3>technology</h3>
        <div className={styles.projectBlurb}>This was a solo exploration of the Howler.js audio library, built over four days during my time at Grace Hopper. I used React to write controlled front-end components that manipulated audio volume and pitch/speed rates in response to user input.</div>
        <h3>key takeaway</h3>
        <div className={styles.projectBlurb}>Pick the right tool for the job. This crux of this project requires multiple audio sources being controlled <em>independently</em> of one another. I initially tried to build this tool using the Tone.js library, but soon realized that Tone lends itself more to creating sounds within a <em>single</em> timeline (i.e. music production). Howler did the job beautifully.</div>
        <h3>up next</h3>
        <div className={styles.projectBlurb}>Implementing a way to measure success, and enabling players to log in and store data from various sessions in a database.</div>
      </div>
    </div>
  </Layout>
)

export default Shiftpitch
