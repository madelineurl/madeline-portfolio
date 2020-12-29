import React, { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styles from "../icons.module.scss";
import ProjectLabel from "./project-label";

const ProjectIcon = ({ image, name, labelTitle, labelSubtitle }) => {
  const [showLabel, setShowLabel] = useState(false);
  const labelClass = showLabel ? styles.label : styles.noneIcon;

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
        <Img
          fluid={image}
          className={styles.projectIcon}
          alt={`${name}-icon`}
        />
      </Link>
      <div className={labelClass}>
      <ProjectLabel
        title={labelTitle}
        subtitle={labelSubtitle}
      />
      </div>
    </div>
  );
};

ProjectIcon.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  labelSubtitle: PropTypes.string.isRequired
};

export default ProjectIcon;
