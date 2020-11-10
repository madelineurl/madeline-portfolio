import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./navbar.module.css"

const NavbarLink = ({ name }) => {
  return (
    <Link
        to={`/${name}/`}
        className={styles.navLink}
        style={{
          color: `grey`,
          textDecoration: `none`,
          //margin: `.5rem 1rem 2rem 1rem`
        }}>
        {name}
    </Link>
  )
}

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired
}

export default NavbarLink;
