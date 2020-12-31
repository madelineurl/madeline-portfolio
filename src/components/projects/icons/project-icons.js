import React from "react";
import ProjectIcon from "./project-icon";
import shiftpitch from "./images/shiftpitch.png";
import xibis from "./images/xibis.png";
import northwestern from './images/northwestern.png';

const ProjectIcons = () => {
  return (
    <div className='project-icons'>
      <ProjectIcon
        image={shiftpitch}
        name='shiftpitch'
        labelTitle='Shiftpitch'
        labelSubtitle='Beatmatching ear-training tool'
      />
       <ProjectIcon
        image={xibis}
        name='xibis'
        labelTitle='Xibis: A Galactic Voyage'
        labelSubtitle='2D single-player escapade'
      />
       <ProjectIcon
        image={northwestern}
        name='northwestern'
        labelTitle='Northwestern University'
        labelSubtitle='School of Communication website'
      />
    </div>
  );
};


  export default ProjectIcons;
