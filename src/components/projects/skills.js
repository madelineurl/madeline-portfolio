import React from "react"
import styles from "./project.module.css"

const Skills = () => (
  <div className={styles.skills}>
    <div>
      <h3>frontend</h3>
      <div>Javascript / ES2020</div>
      <div>CSS3 + SASS</div>
      <div>React</div>
      <div>Redux</div>
      <div>HTML5</div>
      <div>Webpack</div>
    </div>
    <div>
      <h3>backend</h3>
      <div>Node.js</div>
      <div>Express</div>
      <div>SQL / Sequelize</div>
      <div>GraphQL</div>
      <div>PostgreSQL</div>
      <div>Firestore</div>
    </div>
  </div>
)

export default Skills;
