import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./modal.module.css"

const LandingHeader = () => {

  return (
    <div className={styles.landingContainer}>
      <div className={styles.headerContainer}>
        <Link to="/projects/">
          <h1 className={styles.modalButton}>
            madeline
          </h1>
        </Link>
        <h1 className={styles.modalHeader}>url</h1>
      </div>
    </div>
  )
}

LandingHeader.propTypes = {
  siteTitle: PropTypes.string,
}

LandingHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingHeader
