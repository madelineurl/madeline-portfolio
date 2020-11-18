import React from "react"
import styles from "./project.module.css"

const Skills = () => (
  <div className={styles.skills}>
    <div>
      <h3>frontend</h3>
      <div>SASS</div>
      <div>React</div>
      <div>Redux</div>
      <div>Webpack</div>
      <div>CSS3 + HTML5</div>
      <div>responsive design</div>
      <div>Javascript / ES2020</div>
    </div>
    <div>
      <h3>backend</h3>
      <div>Node.js</div>
      <div>Express</div>
      <div>GraphQL</div>
      <div>Firestore</div>
      <div>PostgreSQL</div>
      <div>RESTful API</div>
      <div>SQL / Sequelize</div>
    </div>
    <div>
      <h3>other</h3>
      <div>Git</div>
      <div>Jest</div>
      <div>CI/CD</div>
      <div>OAuth</div>
      <div>Heroku</div>
      <div>Mocha + Chai</div>
      <div>React Testing Library</div>
    </div>
  </div>
)

export default Skills;
