import React from "react"
import NavbarLink from "./navbar-link"
//import PropTypes from "prop-types"

const Navbar = () => {
  return (
    <div style={{
      margin: `0 auto`,
      // padding: `1.45rem 1.0875rem`,
      position: `fixed`,
      right: `10px`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`
    }}>
      <NavbarLink name='about' />
      <NavbarLink name='projects' />
      <NavbarLink name='music' />
    </div>
  )
}

export default Navbar
