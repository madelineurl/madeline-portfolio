import React from "react"
import { Link } from "gatsby"
import { SEO, Particles } from "../components"
import styles from "../components/madeline/modal.module.css"

const Landing = () => (
  <>
    <Particles />
    <SEO title="welcome" />
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
      </div>
    </div>
  </>
)

export default Landing
