import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import Navbar from "./navbar"

const Header = () => (
  <header
    style={{
      background: `black`,
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
        <h1 style={{ margin: 0, color: `grey` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              textAlign: `center`
            }}
          >
            madeline
          </Link>
          url
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
