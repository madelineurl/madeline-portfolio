import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types";

const NavbarLink = ({ name }) => {
  return (
    <Link
      to={`/${name.toLowerCase()}/`}
    >
      {name}
    </Link>
  );
};

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavbarLink;
