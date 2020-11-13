import React from "react"
import { Link } from "gatsby"
import { SEO, LandingLayout } from "../components"
import styles from "../components/madeline/modal.module.css"

const IndexPage = () => (
  <LandingLayout>
    <SEO title="home" />
    <div className={styles.landingContainer}>
      <div>
         <Link
          to="/home/"
          className={styles.headerLink}
        >
          <h1 className={styles.landingHeader}>
            madeline
          </h1>
        </Link>
        <h1 className={styles.landingHeaderGrey}>url</h1>
      <div>Software engineer based in Chicago.</div><div> I design accessible applications that help people connect to their creativity and to each other.</div>
      </div>
    </div>
  </LandingLayout>
)

export default IndexPage;
