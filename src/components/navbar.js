import React from "react";
import { Link } from "gatsby";

const NavbarLink = ({name}) => (
  <Link
    className={window.location.pathname.toLowerCase().includes(name) ? 'active' : null}
    to={`/${name}/`}
    title={name}>
      {name}
  </Link>
)

const Navbar = ({ navbarClass = 'navbar top', onMouseLeave = null }) => (
    <div className={navbarClass} onMouseLeave={onMouseLeave}>
        {/* <NavbarLink name="mixes"/>
        <NavbarLink name="music"/>
        <NavbarLink name="gigs"/> */}
    </div>
);

export default Navbar;
