import React from "react"
import { Layout, SEO, Video, ProjectLink, TemplateLink } from ".."
import styles from "./project.module.css"

const Project = ({ seoTitle, videoTitle, videoURL, siteURL }) => (
  <Layout>
    <SEO title={seoTitle} />
    <div className={styles.videoContainer}>
      <div>
        <Video
          title={videoTitle}
          videoURL={videoURL}/>
        <div className={styles.videoLinkContainer}>
          <ProjectLink
            projectUrl={siteURL}
            text='play'
          />
          <ProjectLink
             projectUrl={siteURL}
             text='github'
          />
          <TemplateLink link='/projects/' >
            back to projects
          </TemplateLink>
        </div>
      </div>
    </div>
  </Layout>
)

export default Project
