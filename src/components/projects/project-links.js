import React from "react";
import PropTypes from "prop-types";

const ProjectLinks = ({ siteURL, videoURL, github }) => (
    <div className='flex'>
      {
        siteURL &&
        <a
          className='project-link flex'
          target="_blank"
          rel="noreferrer"
          href={siteURL}
        >
          play
      </a>
      }
      {
        videoURL &&
        <a
          className='project-link flex'
          target="_blank"
          rel="noreferrer"
          href={videoURL}
        >
          youtube
        </a>
      }
      {
        github &&
        <a
          className='project-link flex'
          target="_blank"
          rel="noreferrer"
          href={github}
        >
          github
        </a>

      }
    </div>
);

ProjectLinks.propTypes = {
  siteURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectLinks;
