import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "./modal.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.container}>
          <Link to='/' className={styles.headerLink} >
            <h1>madeline</h1>
          </Link>
          <h1 className={styles.headerGrey}>url</h1>
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
