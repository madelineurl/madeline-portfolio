import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1020,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
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
        </h1>
        <h1>
          url
        </h1>
      </div>
      <Navbar />
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
