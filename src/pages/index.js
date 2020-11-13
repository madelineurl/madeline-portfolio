import React from "react"
// import { Link } from "gatsby"
import { SEO, LandingLayout, LandingHeader } from "../components"
import styles from "../components/madeline/modal.module.css"

const IndexPage = () => (
  <LandingLayout>
    <SEO title="home" />
    <div className={styles.landingContainer}>
      <LandingHeader />
      <div className={styles.landingText}>Software engineer based in Chicago.</div>
      <div className={styles.landingText}> I design accessible applications that help people connect to their creativity and to each other.</div>
      {/* <Link to="/resume/">resume</Link> */}
    </div>
  </LandingLayout>
)

export default IndexPage;
