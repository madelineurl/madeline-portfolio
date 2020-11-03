import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import styles from "../components/madeline/modal.module.css"

const Landing = () => (
  <>
    <SEO title="landing" />
    <div className={styles.landingContainer}>
      <Link
        to="/home/"
        className={styles.headerLink}
      >
          <h1 className={styles.landingHeader}>
            madeline
          </h1>
        </Link>
      <h1 style={{
          display: `inline-block`,
          fontSize: `3rem`,
          color: `grey`
        }}>url</h1>
    </div>
  </>
)

export default Landing
