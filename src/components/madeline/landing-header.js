import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./modal.module.css"

import Modal from "./modal"

const LandingHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openAboutWindow = () => {
    setShowModal(true);
  }

  const closeAboutWindow = () => {
    setShowModal(false);
  }

  return (
    <div className={styles.headerContainer}>
      <Modal
        show={showModal}
        handleClose={closeAboutWindow}
      />
      <button
        onClick={openAboutWindow}
        className={styles.modalButton}
        >
          madeline
      </button>
      <h1 className={styles.modalHeader}>url</h1>
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
