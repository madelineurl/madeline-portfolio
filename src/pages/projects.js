import React from "react";
import { SEO, Layout, ProjectsPage } from "../components";

const Projects = () => (
  <Layout>
    <SEO title='projects' />
    <ProjectsPage />
    {/* <ProjectIcons />
    <div className='projects'>
      <Shiftpitch />
      <Xibis />
      <Northwestern />
    </div> */}
  </Layout>
);

export default Projects;
