import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import styles from "../icons.module.css";
import contact from "./images/contact-circle.png";
import github from "./images/github-circle.png";
import linkedin from "./images/LI-circle.png";
import medium from "./images/medium-circle.webp";

const Icons = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     icons: allFile(filter: { relativeDirectory: {eq: "social-icons"} }) {
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
    <div className={styles.container}>
       <Link to='/contact/' >
          <img
            src={contact}
            alt="contact"
            className={styles.footerIcon}
          />
        </Link>
        <Icon
            url='https://github.com/madelineurl'
            image={github}
          />
        <Icon
        image={linkedin}
        url='https://www.linkedin.com/in/madeline-url/'
      />
        <Icon
        image={medium}
        url='https://madeline-url.medium.com'
      />
      {/* {
        data.icons.edges.map(icon => {
          let { name } = icon.node;

          if (name === "mail-circle") {
            return (
              <Link key={icon.node.childImageSharp.id} to='/contact/' >
                <Img
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
      } */}
    </div>
  );
};


  export default Icons;
