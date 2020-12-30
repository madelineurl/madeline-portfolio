import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./icons.module.scss";

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
  const labelClass = label ? `${styles.show} ${styles.resumeLabel}` : styles.resumeLabel;

  const showLabel = () => {
    setLabel(true);
  };

  const hideLabel = () => {
    setLabel(false);
  };

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }
  console.log('data:', data);
  return (
    <>
      <a onMouseEnter={showLabel}
        onMouseLeave={hideLabel}
        target="_blank"
        rel="noreferrer"
        href='/resume/'
      >
        <Img
          className={styles.resume}
          fluid={data.file.childImageSharp.fluid}
          id='resume'
        />
      </a>
      <label htmlFor='resume' className={labelClass}>RESUME</label>
    </>
  );
};


export default ResumeIcon;
