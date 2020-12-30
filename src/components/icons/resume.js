import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ResumeIcon = () => {
  const data = graphql`
    query myResume {
      file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`;

  const [label, setLabel] = useState(false);
  const labelClass = label ? 'resume-label' : 'none';

  const showLabel = () => {
    setLabel(true);
  };

  const hideLabel = () => {
    setLabel(false);
  };

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <div className="resume flex">
      <a
        onMouseEnter={showLabel}
        onMouseLeave={hideLabel}
        target="_blank"
        rel="noreferrer"
        href="/resume/"
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          id='resume-icon'
        />
      </a>
      <label htmlFor='resume-icon' className={labelClass}>RESUME</label>
    </div>
  );
};


export default ResumeIcon;
