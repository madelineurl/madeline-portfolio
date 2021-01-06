import React, { useState, useEffect } from "react";
import ProjectIcon from "./project-icon";
import { Shiftpitch, Xibis, Northwestern } from "..";
import shiftpitch from "./icons/shiftpitch.png";
import xibis from "./icons/xibis.png";
import northwestern from './icons/northwestern.png';

const ProjectsPage = () => {
  const [ selected, setSelected ] = useState('');
  const iconsClass = selected === '' ? 'project-icons' : 'project-icons';

  useEffect(() => {
    setSelected('');
  }, []);

  const handleSelected = (project) => {
    setSelected(project);

  };

  return (
    <>
     <div className='projects flex'>
        <div className={iconsClass}>
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
        <Shiftpitch selected={selected}/>
        <Xibis selected={selected} />
        <Northwestern selected={selected} />
      </div>
    </>
  );
};

export default ProjectsPage;
