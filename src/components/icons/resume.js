import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./icons.module.scss";

const ResumeIcon = () => {
  const data = useStaticQuery(graphql`
  query {
    resume: file(relativePath: { eq: "resume.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  const [label, setLabel] = useState(false);
  const labelClass = label ? `${styles.show} ${styles.resumeLabel}` : styles.resumeLabel;

  const showLabel = () => {
    setLabel(true);
  };

  const hideLabel = () => {
    setLabel(false);
  };

  if (!data?.resume?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

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
          fluid={data.resume.childImageSharp.fluid}
          id='resume'
        />
      </a>
      <label htmlFor='resume' className={labelClass}>RESUME</label>
    </>
  );
};


export default ResumeIcon;
