import React from "react";
import PropTypes from "prop-types";
import { ProjectLink, TemplateLink } from "..";

const Project = ({ siteURL, videoURL, github }) => (
  <div className='project-link-container'>
    <ProjectLink
      projectUrl={siteURL}
      text='play'
    />
    <ProjectLink
        projectUrl={github}
        text='github'
    />
    <ProjectLink
        projectUrl={videoURL}
        text='youtube'
    />
    <TemplateLink link='/projects/' >
      back to projects
    </TemplateLink>
  </div>
);

Project.propTypes = {
  siteURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
