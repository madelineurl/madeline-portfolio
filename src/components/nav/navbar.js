import React from "react"
import NavbarLink from "./navbar-link"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar} >
      <NavbarLink name='projects' />
      <NavbarLink name='skills' />
      <NavbarLink name='about' />
      <NavbarLink name='references' />
    </div>
  )
}

export default Navbar
