import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SEO } from "../components";

const Resume = () => {
  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Madeline-Higgins-Software-Engineer-Resume-2020" }) {
        name
        extension
        publicURL
      }
    }
  `);

  const simulateClick = (evt) => {
    evt.click(resume.pdf.publicURL);
  };

  return (
    <>
      <SEO title='resume' />
      <a
        ref={simulateClick}
        href={resume.pdf.publicURL}
        className='loading flex'
      >
          loading...
      </a>
    </>
  );
};

export default Resume;
