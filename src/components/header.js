//import { Link } from "gatsby"
import React, { useState } from "react"
import PropTypes from "prop-types"

import Modal from "./modal"
import Image from "./image"

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openAbout = () => {
    setShowModal(true);
  }

  const closeAbout = () => {
    setShowModal(false);
  }

  return (
    <header
      style={{
        background: `whitesmoke`,
        marginBottom: `.25rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1020,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          justifyContent: `center`
        }}
      >
        <div>
          <Modal
            show={showModal}
            handleClose={closeAbout}
          >
            <Image />
            <div>I'm a self-directed learner. I taught myself to DJ after getting involved with the radio station in college, and ended up working part-time as a freelance DJ and at <a href='http://gramaphonerecords.com/'>Gramaphone Records</a> on the weekends. I spent a few months obsessively teaching myself music theory just before I picked up Javascript.</div>
          </Modal>
          <button
            onClick={openAbout}
            style={{ margin: 0, color: `grey` }}>
            {/* <Link
              to="/about/"
              style={{
                color: `black`,
                textDecoration: `none`,
                textAlign: `center`
              }}
            > */}
              madeline
            {/* </Link> */}
            url
          </button>
        </div>
        {/* <div style={{
          position: `absolute`,
          right: `1rem`,
          display: `flex`,
          justifyContent: `space-around`
        }}>
          <Icons />
        </div> */}
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
