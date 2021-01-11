import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { SEO, Layout, ProjectIcon, ProjectTemplate } from "../components";
import projectData from "../data/data";

export const query = graphql`
  query {
    xibis: file(relativePath: { eq: "xibis-icon.png" }) {
      childImageSharp {
        fixed(width: 280, height: 220, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    shiftpitch: file(relativePath: { eq: "shiftpitch-logo.png" }) {
      childImageSharp {
        fixed(width: 220, height: 220, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    upperCrust: file(relativePath: { eq: "uppercrust-logo.png" }) {
      childImageSharp {
        fixed(width: 220, height: 220, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const Projects = ({ data }) => {
  const [ selected, setSelected ] = useState('');

  useEffect(() => {
    setSelected('');
  }, []);

  const handleSelected = (project) => {
    setSelected(project);
  };

return (
  <Layout>
    <SEO title='projects' />
    <div className='projects'>
        <div className='project-icons'>
        <ProjectIcon
            image={data.xibis.childImageSharp.fixed}
            name='xibis'
            labelTitle='Xibis: A Galactic Voyage'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={data.shiftpitch.childImageSharp.fixed}
            name='shiftpitch'
            labelTitle='Shiftpitch'
            handleClick={handleSelected}
            selected={selected}
          />
          <ProjectIcon
            image={data.upperCrust.childImageSharp.fixed}
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
  </Layout>
)
};

export default Projects;
