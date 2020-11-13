import React, { useState} from "react"
import NavbarLink from "./navbar-link"
import styles from "./navbar.module.css"
import HamburgerMenu from "react-hamburger-menu"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className={styles.navbar} >
      <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={40}
        height={20}
        strokeWidth={5}
        rotate={0}
        color='black'
        borderRadius={8}
        animationDuration={0.5}
      />
      {/* <NavbarLink name='home' />
      <NavbarLink name='projects' />
      <NavbarLink name='skills' />
      <NavbarLink name='references' /> */}
    </div>
  )
}

export default Navbar
