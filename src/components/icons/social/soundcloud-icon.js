import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Soundcloud = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "soundcloud-icon.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="soundcloud-icon"
      className='soundcloud'
    />
  );
};


  export default Soundcloud;
