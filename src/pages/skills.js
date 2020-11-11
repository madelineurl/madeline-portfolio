import React from "react"
import { Layout, SEO, HomeLink } from "../components"

const Skills = () => (
  <Layout>
    <SEO title='skills' />
      <h3>Skills</h3>
      <div>Javascript / ES2020</div>
      <div>React</div>
      <div>Redux</div>
      <div>PostgreSQL</div>
      <div>Firestore</div>
    <HomeLink />
  </Layout>
)

export default Skills;
