import React, { useState, useEffect } from "react";
import ProjectIcon from "./project-icon";
import ProjectTemplate from "./project-template";
import shiftpitch from "./icons/shiftpitch-logo.png";
import xibis from "./icons/xibis-icon.png";
import bread from './icons/uppercrust-logo.png';
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
     <div className='projects'>
        <div className='project-icons'>
        <ProjectIcon
            image={xibis}
            name='xibis'
            labelTitle='Xibis: A Galactic Voyage'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={shiftpitch}
            name='shiftpitch'
            labelTitle='Shiftpitch'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={bread}
            name='upper-crust'
            labelTitle='Upper-Crust (ecommerce site)'
            handleClick={handleSelected}
            selected={selected}
          />
        </div>
        <ProjectTemplate projectData={projectData.shiftpitch} selected={selected}/>
        <ProjectTemplate projectData={projectData.xibis} selected={selected}/>
        <ProjectTemplate projectData={projectData.bread} selected={selected}/>
      </div>
    </>
  );
};

export default ProjectsPage;
