import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const LandingHeader = () => {
  return (
    <div className='landing-container flex'>
      <div>
        <Link to="/projects/">
          <h1 id='landing-link'>
            madeline
          </h1>
        </Link>
        <h1 id='landing-header'>url</h1>
      </div>
    </div>
  );
};

LandingHeader.propTypes = {
  siteTitle: PropTypes.string,
};

LandingHeader.defaultProps = {
  siteTitle: ``,
};

export default LandingHeader;
