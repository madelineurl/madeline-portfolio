import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = open ? 'show' : '';

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='burger'>
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          width={40}
          height={20}
          strokeWidth={5}
          rotate={0}
          color='rgb(65, 65, 65)'
          borderRadius={8}
          animationDuration={0.5}
        />
      </div>
      <div className={`navbar ${showNav}`}>
        <Link to='/about/' >about</Link>
        <Link to='/projects/' >projects</Link>
        <Link to='/music/' >music</Link>
        <Link to='/skills/' >skills</Link>
      </div>
    </>
  );
};

export default Navbar;
