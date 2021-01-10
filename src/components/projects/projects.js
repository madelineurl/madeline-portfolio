import React, { useState, useEffect } from "react";
import ProjectIcon from "./project-icon";
import ProjectTemplate from "./project-template";
import shiftpitch from "./icons/shiftpitch.png";
import xibis from "./icons/xibis.png";
import northwestern from './icons/northwestern.png';
import projectData from "./data/data";

const ProjectsPage = () => {
  const [ selected, setSelected ] = useState('');

  useEffect(() => {
    setSelected('');
  }, []);

  const handleSelected = (project) => {
    setSelected(project);
  };

  return (
    <>
     <div className='projects flex'>
        <div className='project-icons flex'>
          <ProjectIcon
            image={shiftpitch}
            name='shiftpitch'
            labelTitle='Shiftpitch'
            labelSubtitle='Beatmatching ear-training tool'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={xibis}
            name='xibis'
            labelTitle='Xibis: A Galactic Voyage'
            labelSubtitle='2D single-player escapade'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={northwestern}
            name='northwestern'
            labelTitle='Northwestern University'
            labelSubtitle='School of Communication website'
            handleClick={handleSelected}
            selected={selected}
          />
        </div>
        <ProjectTemplate projectData={projectData.shiftpitch} selected={selected}/>
        <ProjectTemplate projectData={projectData.xibis} selected={selected}/>
        <ProjectTemplate projectData={projectData.northwestern} selected={selected}/>
      </div>
    </>
  );
};

export default ProjectsPage;
