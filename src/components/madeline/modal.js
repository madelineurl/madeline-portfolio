import React from "react";
import PropTypes from "prop-types";
import MusicBlurb from "../music/music-blurb";

const Modal = ({ handleClose, show }) => {
  const showHideModal = show ? 'show-modal' : 'none';

  return (
    <div className={`modal ${showHideModal}`}>
      <section className='modal-main'>
        <button
          onClick={handleClose}
          className='close-modal'>
            x
        </button>
        <MusicBlurb />
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
