import React, { useState } from "react";
import resume from './images/resume.png';

const ResumeIcon = () => {
  const [label, setLabel] = useState(false);
  const labelClass = label ? 'resume-label' : 'none';

  const showLabel = () => {
    setLabel(true);
  };

  const hideLabel = () => {
    setLabel(false);
  };

  return (
    <div className="resume flex">
      <label htmlFor='resume-icon' className={labelClass}>RESUME</label>
      <a
        onMouseEnter={showLabel}
        onMouseLeave={hideLabel}
        target="_blank"
        rel="noreferrer"
        href="/resume/"
      >
        <img
          src={resume}
          id='resume-icon'
          alt='link to my resume'
        />
      </a>
    </div>
  );
};


export default ResumeIcon;
