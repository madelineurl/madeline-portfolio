import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"

const Navbar = () => {
  return (
    <div>
      <Link
        to='/about/'
        style={{
          color: `white`,
          textDecoration: `none`,
          margin: `.5rem`
        }}>
        about
      </Link>
      <Link
        to='/projects/'
        style={{
          color: `white`,
          textDecoration: `none`,
          margin: `.5rem`
        }}>
        projects
      </Link>
      <Link
        to='/music/'
        style={{
          color: `white`,
          textDecoration: `none`,
          margin: `.5rem`
        }}>
        music
      </Link>
    </div>
  )
}

export default Navbar
