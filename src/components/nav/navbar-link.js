import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./navbar.module.css"

const NavbarLink = ({ name }) => {
  return (
    <Link
      to={`/${name.toLowerCase()}/`}
      className={styles.navLink}
    >
      {name}
    </Link>
  )
}

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired
}

export default NavbarLink;
