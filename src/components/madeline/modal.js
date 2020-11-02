import React from "react"
import About from "./about"
import styles from "./modal.module.css"

const Modal = ({ handleClose, show }) => {
  const showHideModal = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideModal}`}>
      <section className={styles.modalMain}>
        <button
          onClick={handleClose}
          className={styles.modalButton}>
            x
        </button>
        <About />
      </section>
    </div>
  )
}

export default Modal
