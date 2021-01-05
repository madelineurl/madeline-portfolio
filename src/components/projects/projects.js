import React, { useState } from "react";
import ProjectIcon from "./project-icon";
import { Shiftpitch, Xibis, Northwestern } from "..";
import shiftpitch from "./icons/images/shiftpitch.png";
import xibis from "./icons/images/xibis.png";
import northwestern from './icons/images/northwestern.png';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ProjectsPage = () => {
  const [ selected, setSelected ] = useState('');

  const handleSelected = (project) => {
    setSelected(project);
    scrollTo(`#${project}`);
  };

  return (
    <>
      <div className='project-icons'>
      <ProjectIcon
        image={shiftpitch}
        name='shiftpitch'
        labelTitle='Shiftpitch'
        labelSubtitle='Beatmatching ear-training tool'
        handleClick={handleSelected}
      />
       <ProjectIcon
        image={xibis}
        name='xibis'
        labelTitle='Xibis: A Galactic Voyage'
        labelSubtitle='2D single-player escapade'
        handleClick={handleSelected}
      />
       <ProjectIcon
        image={northwestern}
        name='northwestern'
        labelTitle='Northwestern University'
        labelSubtitle='School of Communication website'
        handleClick={handleSelected}
      />
    </div>
      <div className='projects'>
        <Shiftpitch selected={selected}/>
        <Xibis selected={selected} />
        <Northwestern selected={selected} />
      </div>
    </>
  );
};

export default ProjectsPage;
