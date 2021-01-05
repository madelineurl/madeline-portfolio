import React, { useState } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import PropTypes from "prop-types";
// import { Link } from "gatsby";

const ProjectIcon = ({ image, name, labelTitle, labelSubtitle }) => {
  const [showLabel, setShowLabel] = useState(false);
  const labelClass = showLabel ? 'label' : 'hide';

  const revealLabel = () => {
    setShowLabel(true);
  };

  const hideLabel = () => {
    setShowLabel(false);
  };

  return (
    // <Link
    //   to={`/${name}/`}
      // onMouseOver={revealLabel}
      // onMouseLeave={hideLabel}
    // >
    <button onMouseOver={revealLabel}
    onMouseLeave={hideLabel} onFocus={revealLabel} onClick={() => scrollTo(`#${name}`)}>
      <div className='flex'>
        <img
          src={image}
          id={name}
          alt={`${name}-icon`}
        />
        <div className={labelClass}>
          <h4>{labelTitle}</h4>
          <span>{labelSubtitle}</span>
        </div>
      </div>
    </button>
  );
};

ProjectIcon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  labelSubtitle: PropTypes.string.isRequired
};

export default ProjectIcon;
