import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectIcon from "./project-icon";
import styles from "../icons.module.scss";

const ProjectIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: {eq: "project-icons"} }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              id
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`
  );

  return (
    <div className={styles.navIconContainer}>
      {
        data.icons.edges.map(icon => {
          return (
          <ProjectIcon
            key={icon.node.childImageSharp.id}
            image={icon.node.childImageSharp.fluid}
            name='shiftpitch'
            labelTitle='Shiftpitch'
            labelSubtitle='Beatmatching ear-training tool'
            // className={styles.projectIcon}
          />
          );
        })
      }
      {/* <ProjectIcon
        image={data.shiftpitch.childImageSharp.fixed}
        name='shiftpitch'
        iconStyle={styles.shiftpitch}
        labelTitle='Shiftpitch'
        labelSubtitle='Beatmatching ear-training tool'
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
      /> */}
    </div>
  );
};


  export default ProjectIcons;
