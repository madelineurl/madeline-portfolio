import React from "react";
import PropTypes from "prop-types";
import styles from "./link.module.css";

const ProjectLink = ({ projectUrl, text }) => (
  <a
    className={styles.videoLink}
    target="_blank"
    rel="noreferrer"
    href={projectUrl}
  >
    {text}
  </a>
);

ProjectLink.propTypes = {
  projectUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ProjectLink;
