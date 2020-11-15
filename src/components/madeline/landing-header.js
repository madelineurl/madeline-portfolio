import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./modal.module.css"

// import Modal from "./modal"

const LandingHeader = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openAboutWindow = () => {
  //   setShowModal(true);
  // }

  // const closeAboutWindow = () => {
  //   setShowModal(false);
  // }

  return (
    <div className={styles.landingContainer}>
      <div className={styles.headerContainer}>
        <Link to="/projects/">
          <h1 className={styles.modalButton}>
            madeline
          </h1>
        </Link>
        {/* <Modal
          show={showModal}
          handleClose={closeAboutWindow}
        />
        <button
          onClick={openAboutWindow}
          className={styles.modalButton}
          >
            madeline
        </button> */}
        <h1 className={styles.modalHeader}>url</h1>
      </div>
      {/* <div className={styles.landingText}>software engineer (chicago)</div> */}
        {/* <div className={styles.landingText}> i design accessible applications that help people connect to their creativity and to each other</div> */}
        {/* <Link to="/resume/">resume</Link> */}
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
