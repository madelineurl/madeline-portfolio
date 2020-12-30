import React from "react";
import ProjectIcon from "./project-icon";
import styles from "../icons.module.css";
import shiftpitch from "./images/shiftpitch.png";
import xibis from "./images/xibis.png";
import northwestern from './images/northwestern.png';

const ProjectIcons = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     icons: allFile(filter: { relativeDirectory: {eq: "project-icons"} }) {
  //       edges {
  //         node {
  //           name
  //           relativePath
  //           childImageSharp {
  //             id
  //             fluid(maxWidth: 1600) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`
  // );

  return (
    <div className={styles.navIcon}>
      <ProjectIcon
        image={shiftpitch}
        name='shiftpitch'
        iconStyle={styles.shiftpitch}
        labelTitle='Shiftpitch'
        labelSubtitle='Beatmatching ear-training tool'
      />
       <ProjectIcon
        image={xibis}
        name='xibis'
        iconStyle={styles.xibis}
        labelTitle='Xibis: A Galactic Voyage'
        labelSubtitle='2D single-player escapade'
      />
       <ProjectIcon
        image={northwestern}
        name='northwestern'
        iconStyle={styles.northwestern}
        labelTitle='Northwestern University'
        labelSubtitle='School of Communication website'
      />
    </div>
  );
};


  export default ProjectIcons;
