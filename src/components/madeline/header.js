import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./modal.module.css"

import Modal from "./modal"

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openAboutWindow = () => {
    setShowModal(true);
  }

  const closeAboutWindow = () => {
    setShowModal(false);
  }

  return (
    <header className={styles.headerBackground} >
      <div className={styles.headerContainer}>
        <div>
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
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
