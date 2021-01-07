import React, { useState } from "react";
import { ProjectLinks } from "..";

const ProjectTemplate = ({ selected, projectData }) => {
  const {
    name,
    headerSentence,
    overview,
    technology,
    keyTakeaways,
    upNext,
    roleDescription,
    roleTitle,
    URLs
  } = projectData;

  const [ moreInfo, toggleMoreInfo ] = useState(false);
  const selectedClass = selected === name ? 'project-page selected flex' : 'project-page flex';
  const expandClass = moreInfo ? 'more-info flex' : 'more-info hide flex';

  const openMoreInfo = () => {
    toggleMoreInfo(true);
  };


  const closeMoreInfo = () => {
    toggleMoreInfo(false);
  };

  return (
    <>
      <div className={selectedClass}>
        <div className='project-info flex'>
          <div className='flex'>
            <h3>{ URLs.videoTitle ? URLs.videoTitle : name }</h3>
            {
              URLs.youTube ? (
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
          <div>
            <h4>{headerSentence}</h4>
            {overview}
            <div>
              <button onClick={openMoreInfo} >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className={expandClass}>
          <div>
            <div className='flex'>
              <h3>technology</h3>
            </div>
            <div>{technology}</div>
          </div>
          {
            roleDescription &&
            roleTitle &&
            <div>
              <div className='flex'>
                <h3>role: {roleTitle}</h3>
              </div>
              <div>{roleDescription}</div>
          </div>
          }
          <div>
            <div className='flex'>
              <h3>key takeaways</h3>
            </div>
            <div>{keyTakeaways}</div>
          </div>
          {
            upNext &&
            <div>
              <div className='flex'>
                <h3>up next</h3>
              </div>
            <div>{upNext}</div>
          </div>
          }
          <button onClick={closeMoreInfo}>Read less</button>
        </div>
      </div>
    </>
  );
};


export default ProjectTemplate;
