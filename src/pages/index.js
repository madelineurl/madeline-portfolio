import React from "react"
import { SEO, LandingLayout, LandingHeader } from "../components"
import styles from "../components/madeline/modal.module.css"

const IndexPage = () => (
  <LandingLayout>
    <SEO title="home" />
    <div className={styles.landingContainer}>
      <LandingHeader />
      <div>Software engineer based in Chicago.</div><div> I design accessible applications that help people connect to their creativity and to each other.</div>
    </div>
  </LandingLayout>
)

export default IndexPage;
