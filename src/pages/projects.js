import React from "react"
import { Link } from "gatsby"
import { SEO, Layout, HomeLink } from "../components"

const Projects = () => (
  <Layout>
    <SEO title='/projects/' />
    <h2>Projects</h2>
    <Link to='/shiftpitch/'>shiftpitch</Link>
    <Link to='/xibis/'>xibis</Link>
    <HomeLink />
  </Layout>
)

export default Projects;
