import React from "react";
import PropTypes from "prop-types";

const ProjectLinks = ({ siteURL, videoURL, github }) => (
    <div className='flex'>
     <a
      className='project-link flex'
      target="_blank"
      rel="noreferrer"
      href={siteURL}
    >
      play
    </a>
    <a
      className='project-link flex'
      target="_blank"
      rel="noreferrer"
      href={github}
    >
      github
    </a>
    <a
      className='project-link flex'
      target="_blank"
      rel="noreferrer"
      href={videoURL}
    >
      youtube
    </a>
    </div>
);

ProjectLinks.propTypes = {
  siteURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectLinks;
