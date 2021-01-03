import React from "react";
import PropTypes from "prop-types";

const Project = ({ siteURL, videoURL, github }) => (
  <div className='project-link-container'>
     <a
      className='project-link'
      target="_blank"
      rel="noreferrer"
      href={siteURL}
    >
      play
    </a>
    <a
      className='link'
      target="_blank"
      rel="noreferrer"
      href={github}
    >
      github
    </a>
    <a
      className='link'
      target="_blank"
      rel="noreferrer"
      href={videoURL}
    >
      youtube
    </a>
  </div>
);

Project.propTypes = {
  siteURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
