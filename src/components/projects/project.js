import React from "react"
import { Layout, SEO, Video, HomeLink, ProjectLink } from ".."
import styles from "./project.module.css"

const Project = (props) => (
  <Layout>
    <SEO title={props.seoTitle} />
    <div className={styles.videoContainer}>
      <div>
        <Video
          title={props.videoTitle}
          videoURL={props.videoURL}/>
        <div className={styles.videoLinkContainer}>
          <ProjectLink
            projectUrl={props.siteURL}
            text='Play'
          />
          <ProjectLink
             projectUrl={props.siteURL}
             text='Github'
          />
          <HomeLink />
        </div>
      </div>
    </div>
  </Layout>
)

export default Project
