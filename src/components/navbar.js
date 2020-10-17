import React from "react"
import NavbarLink from "./navbar-link"
//import PropTypes from "prop-types"

const Navbar = () => {
  return (
    <div style={{
      margin: `0 auto`,
      maxWidth: 1020,
      // padding: `1.45rem 1.0875rem`,
      display: `flex`,
      justifyContent: `center`
    }}>
      <NavbarLink name='about' />
      <NavbarLink name='projects' />
      <NavbarLink name='music' />
      <NavbarLink name='articles' />
      <NavbarLink name='contact' />
    </div>
  )
}

export default Navbar
