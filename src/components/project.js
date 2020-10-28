import React from "react"

import { Layout, SEO, Video, HomeButton } from "../components"
import buttonStyles from "../components/styling/buttons.module.css"
import videoStyles from "../components/styling/video.module.css"

const Project = (props) => (
  <Layout>
    <SEO title={props.seoTitle} />
    <div className={videoStyles.videoContainer}>
      <div>
        <Video
          title={props.videoTitle}
          videoURL={props.videoURL}/>
        <div className={videoStyles.videoLinkContainer}>
          <a
            className={buttonStyles.link}
            href={props.siteURL}
            target="_blank"
            rel="noreferrer"
              >Play
            </a>
          <a
            className={buttonStyles.link}
            href={props.gitHub}
            target="_blank"
            rel="noreferrer"
            >
              Github
            </a>
        </div>
      </div>
    </div>
    <HomeButton />
  </Layout>
)

export default Project
