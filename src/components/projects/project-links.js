import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Project = ({ siteURL, videoURL, github }) => (
  <div className='flex' style={{ flexDirection: `column` }}>
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
    <Link
      className='link'
      to='/projects/'
      style={{
        alignSelf: `center`
      }}
    >
      back to projects
    </Link>
  </div>
);

Project.propTypes = {
  siteURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
