import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header>
      <div className='container main-header'>
        <Link to='/' className='header-link' >
          <h1>madeline</h1>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
