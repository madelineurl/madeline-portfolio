import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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
    <div className='flex'>
      <Link
        onMouseOver={revealLabel}
        onMouseLeave={hideLabel}
        to={`/${name}/`}
      >
        <img
          src={image}
          id={name}
          alt={`${name}-icon`}
        />
      </Link>
      <div className={labelClass}>
        <h4>{labelTitle}</h4>
        <span>{labelSubtitle}</span>
      </div>
    </div>
  );
};

ProjectIcon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  labelSubtitle: PropTypes.string.isRequired
};

export default ProjectIcon;
