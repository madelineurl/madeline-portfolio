import React from "react";
import PropTypes from "prop-types";
import MusicBlurb from "../music/music-blurb";
import HamburgerMenu from "react-hamburger-menu";

const Modal = ({ handleClose, show }) => {
  const showHideModal = show ? 'modal show' : 'modal';

  return (
    <div className={showHideModal}>
      <section>
        <button className='modal-btn'>
          <HamburgerMenu
              isOpen={true}
              menuClicked={handleClose}
              width={30}
              height={10}
              strokeWidth={4}
              rotate={0}
              color='rgb(65, 65, 65)'
              borderRadius={8}
              animationDuration={0.5}
            />
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
