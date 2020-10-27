//import { Link } from "gatsby"
import React, { useState } from "react"
import PropTypes from "prop-types"
import headerStyles from "./styling/header.module.css"

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
    <header className={headerStyles.headerBackground} >
      <div className={headerStyles.headerContainer}>
        <div>
          <Modal
            show={showModal}
            handleClose={closeAboutWindow}
          />

          <button
            onClick={openAboutWindow}
            className={headerStyles.modalButton}
            >
              madelineurl
          </button>
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
