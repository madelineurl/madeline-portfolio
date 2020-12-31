import React, { useState} from "react";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = open ? 'show' : 'hide';

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
        <Link to='/contact/' >contact</Link>
      </div>
    </>
  );
};

export default Navbar;
