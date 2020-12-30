import React from "react";
import PropTypes from "prop-types";
import { ProjectLink } from "..";
import styles from "./project.module.css";

const Project = ({ siteURL, videoURL, github }) => (
  <>
    <div className={styles.videoContainer}>
        {/* <Video
          title={videoTitle}
          videoURL={videoURL}/> */}
        <div className={styles.videoLinkContainer}>
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
          {/* <TemplateLink link='/projects/' >
            back to projects
          </TemplateLink> */}
        </div>
    </div>
  </>
);

Project.propTypes = {
  siteURL: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
