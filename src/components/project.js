import React from "react"

import { Layout, SEO, Video, HomeLink, ProjectLink } from "../components"
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
          <ProjectLink
            projectUrl={props.siteURL}
            text='Play'
          />
          <ProjectLink
             projectUrl={props.siteURL}
             text='Github'
          />
        </div>
      </div>
    </div>
    <HomeLink />
  </Layout>
)

export default Project
