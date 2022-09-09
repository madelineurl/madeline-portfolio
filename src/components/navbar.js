import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = open ? 'navbar' : 'navbar hide';

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [open]);

  const handleHover = () => {
    setOpen(!open);
  };

  return (
    <div className="header-container">
      <h1 id='madeline' onMouseOver={handleHover}>madeline</h1>
      <div className={showNav}>
        <Link to='/mixes/' >mixes</Link>
        <Link to='/music/' >production</Link>
        <Link to='/about/' >about</Link>
        {/* <Link to='/music/' >production</Link> */}
        {/* <Link to='/skills/' >skills</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
