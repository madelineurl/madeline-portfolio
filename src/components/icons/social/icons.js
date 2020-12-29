import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import Icon from "./icon";
import styles from "../icons.module.scss";

const Icons = () => {
  const data = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: {eq: "social-icons"} }) {
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
    <div className={styles.iconContainer}>
      {
        data.icons.edges.map(icon => {
          let { name } = icon.node;

          if (name === "contact-circle") {
            return (
              <Link to='/contact/' >
                <Img
                  key={icon.node.childImageSharp.id}
                  fluid={icon.node.childImageSharp.fluid}
                  alt="contact"
                  className={styles.icon}
                />
              </Link>
            );
          } else {
            let url;
            if (name === 'github-circle') {
              url = 'https://github.com/madelineurl';
            } else if (name === 'LI-circle') {
              url = 'https://www.linkedin.com/in/madeline-url/';
            } else if (name === 'medium-circle') {
              url = 'https://madeline-url.medium.com/';
            }

            return (
              <Icon
                key={icon.node.childImageSharp.id}
                name={icon}
                url={url}
                image={icon.node.childImageSharp.fluid}
              />
            );
          }
        })
      }
    </div>
  );
};


  export default Icons;
