import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const FooterIcons = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "social-icons" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`);

  return (
    <div className='flex'>
        {
          data.allFile.edges.map(image => {
            switch(image.node.base) {
              case "GitHub-Mark.png":
                image.url = "https://github.com/madelineurl/";
                break;
              case 'linkedin.png':
                image.url = "https://linkedin.com/madeline-url";
                break;
              case 'medium.png':
                image.url = "https://madeline-url.medium.com/";
                break;
              default:
                image.url = "https://madelineurl.online";
            }
            if (image.node.base === "mail.png") {
              return (
                <Link to='/contact/' >
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt="contact"
                    className='footer-icon'
                    style={{height: "50px", width: "50px"}}
                  />
                </Link>
              );
            } else {
                return (
                <a
                  href={image.url}
                  target="_blank"
                  rel="noreferrer"
                  key={image.node.base.split(".")[0]}
                >
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt='social icon'
                    className='footer-icon'
                  />
                </a>
              );
              // return <Icon key={image.node.base.split(".")[0]} image={image} />;
            }
          })
        }
    </div>
  );
};


  export default FooterIcons;
