import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "../icons.module.css";

const ProjectIcon = ({ image, name, labelTitle, labelSubtitle, iconStyle }) => {
  const [showLabel, setShowLabel] = useState(false);
  const labelClass = showLabel ? styles.label : styles.hide;

  const revealLabel = () => {
    setShowLabel(true);
  };

  const hideLabel = () => {
    setShowLabel(false);
  };

  return (
    <div className={styles.container}>
      <Link
        onMouseOver={revealLabel}
        onMouseLeave={hideLabel}
        to={`/${name}/`}
      >
        <img
          src={image}
          className={iconStyle}
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
  iconStyle: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  labelSubtitle: PropTypes.string.isRequired
};

export default ProjectIcon;
