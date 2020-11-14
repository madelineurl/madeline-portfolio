import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectIcon from "./project-icon"
import styles from "../icons.module.scss"

const ProjectIcons = () => {
  const data =  useStaticQuery(graphql`
    query {
      shiftpitch: file(relativePath: { eq: "shiftpitch.png" }) {
        childImageSharp {
          fixed(width: 148, height: 148) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      xibis: file(relativePath: { eq: "Planet-Aguilera.png" }) {
        childImageSharp {
          fixed(width: 210, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      northwestern: file(relativePath: { eq: "northwestern-grey.png" }) {
        childImageSharp {
          fixed(width: 165, height: 165) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.navIconContainer}>
      <ProjectIcon
        image={data.shiftpitch.childImageSharp.fixed}
        name='shiftpitch'
        iconStyle={styles.shiftpitch}
        labelTitle='Shiftpitch'
        labelSubtitle='beatmatching ear-training tool'
      />
       <ProjectIcon
        image={data.xibis.childImageSharp.fixed}
        name='xibis'
        iconStyle={styles.xibis}
        labelTitle='Xibis: A Galactic Voyage'
        labelSubtitle='2D single-player escapade'
      />
       <ProjectIcon
        image={data.northwestern.childImageSharp.fixed}
        name='northwestern'
        iconStyle={styles.northwestern}
        labelTitle='Northwestern University'
        labelSubtitle='School of Communication website'
      />
    </div>
  )
}


  export default ProjectIcons
