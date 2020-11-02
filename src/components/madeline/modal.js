import React from "react"
import About from "./about"

import modalStyles from "./modal.module.css"

const Modal = ({ handleClose, show }) => {
  const showHideModal = show ? modalStyles.displayBlock : modalStyles.displayNone;

  return (
    <div className={`${modalStyles.modal} ${showHideModal}`}>
      <section className={modalStyles.modalMain}>
        <button
          onClick={handleClose}
          className={modalStyles.modalButton}>
            x
        </button>
        <About />
      </section>
    </div>
  )
}

export default Modal
