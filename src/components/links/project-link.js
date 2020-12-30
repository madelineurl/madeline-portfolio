import React from "react";
import PropTypes from "prop-types";

const ProjectLink = ({ projectUrl, text }) => (
  <a
    className='video-link'
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
