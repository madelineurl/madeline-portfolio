import React, { useState} from "react"
// import { Link } from "gatsby"
import NavbarLink from "./navbar-link"
import styles from "./navbar.module.css"
import HamburgerMenu from "react-hamburger-menu"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = open ? styles.show : styles.hide;

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className={styles.burger}>
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          width={40}
          height={20}
          strokeWidth={5}
          rotate={0}
          color='grey'
          borderRadius={8}
          animationDuration={0.5}
        />
      </div>
      <div className={`${styles.navbar} ${showNav}`}>
        {/* <NavbarLink name='ABOUT' /> */}
        <NavbarLink name='PROJECTS' />
        <NavbarLink name='SKILLS' />
        <NavbarLink name='MUSIC' />
        {/* <NavbarLink name='REFERENCES' /> */}
        {/* <Link to='/' className={styles.navLink} >HOME</Link> */}
      </div>
    </>
  )
}

export default Navbar
