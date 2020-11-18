import React from "react"
import PropTypes from "prop-types"
import MusicBlurb from "../music/music-blurb"
import styles from "./modal.module.css"

const Modal = ({ handleClose, show }) => {
  const showHideModal = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideModal}`}>
      <section className={styles.modalMain}>
        <button
          onClick={handleClose}
          className={styles.closeModal}>
            x
        </button>
        <MusicBlurb />
      </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default Modal
