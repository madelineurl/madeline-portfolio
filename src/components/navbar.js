import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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

  return (
    <div className="header-container">
      <h1 id='madeline' onClick={() => setOpen(!open)} onMouseOver={() => setOpen(true)}>madeline</h1>
      <div className={showNav} onMouseLeave={() => setOpen(false)}>
        <AnchorLink to='/mixes/' title="DJ Mixes">mixes</AnchorLink>
        <AnchorLink to='/music/' title="Produced Music">production</AnchorLink>
        <AnchorLink to='/about/' title="about">about</AnchorLink>
        {/* <AnchorLink to='/music/' >production</AnchorLink> */}
        {/* <AnchorLink to='/skills/' >skills</AnchorLink> */}
      </div>
    </div>
  );
};

export default Navbar;
