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
          if (icon.node.name === "mail-circle.png") {
            return (
              <Link to='/contact/' >
                <Img
                  fluid={data.contact.childImageSharp.fluid}
                  alt="contact"
                  className={styles.icon}
                />
              </Link>
            );
          } else {
            return (
              <Icon
                key={icon.node.childImageSharp.id}
                name={icon}
                url='https://github.com/madelineurl'
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
