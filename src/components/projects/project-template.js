import React, { useState } from "react";
import { ProjectLinks } from "..";
import InfoTabs from "./info-tabs";

const ProjectTemplate = ({ selected, projectData }) => {
  const {
    id,
    name,
    headerSentence,
    overview,
    technology,
    takeaways,
    upNext,
    myRole,
    roleTitle,
    URLs
  } = projectData;

  const selectedProject = selected === id ? 'project-page selected flex' : 'project-page flex';
  const [ selectedInfoSection, setselectedInfoSection ] = useState('overview');

  const handleInfo = (id) => {
    setselectedInfoSection(id);
  };

  let selectedText;
  switch(selectedInfoSection) {
    case 'overview':
      selectedText = overview;
      break;
    case 'technology':
      selectedText = technology;
      break;
    case 'myRole':
      selectedText = myRole;
      break;
    case 'takeaways':
      selectedText = takeaways;
      break;
    case 'upNext':
      selectedText = upNext;
      break;
    default:
      selectedText = overview;
  }

  const buttonText = {
    overview: 'overview',
    technology: 'technology',
    takeaways: 'takeaways'
  };

  if (upNext) buttonText.upNext = 'up next';
  if (roleTitle) buttonText.myRole = roleTitle;

  return (
    <div className={selectedProject}>
        <div className='flex'>
          <h3>{ URLs.videoTitle ? URLs.videoTitle : name }</h3>
          {
            URLs.github ? (
              <ProjectLinks
                videoTitle={URLs.videoTitle}
                videoURL={URLs.youTube}
                github={URLs.github}
                siteURL={URLs.site}
              />
            ) : (
            <a
              className='project-link flex'
              target="_blank"
              rel="noreferrer"
              href={URLs.site}
            >
              visit site
            </a>)
          }
        </div>
        <div className='project-info flex'>
          <InfoTabs
            handleInfo={handleInfo}
            buttonText={buttonText}
            selected={selectedInfoSection}
          />
          <div className='info-section flex'>
            {
              selectedInfoSection === 'overview' && <h4>{headerSentence}</h4>
            }
            {selectedText}
          </div>
        </div>
      </div>
  );
};


export default ProjectTemplate;
