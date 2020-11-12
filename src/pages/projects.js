import React from "react"
import { Link } from "gatsby"
import { SEO, Layout, HomeLink, ListProjects } from "../components"

const Projects = () => (
  <Layout>
    <SEO title='/projects/' />
    <ListProjects />
    <HomeLink />
  </Layout>
)

export default Projects;
