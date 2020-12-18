import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./navbar.module.css";
// import scrollTo from 'gatsby-plugin-smoothscroll'

const NavbarLink = ({ name }) => {
  return (
    // <button className={styles.navLink} onClick={() => scrollTo(`#${name.toLowerCase()}`)}>{name}</button>
    <Link
      to={`/${name.toLowerCase()}/`}
      className={styles.navLink}
    >
      {name}
    </Link>
  );
};

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavbarLink;
