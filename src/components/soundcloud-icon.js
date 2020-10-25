import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
//import { Link } from "gatsby"

const Soundcloud = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "soundcloud-icon.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="soundcloud-icon"
          style={{
            //marginRight: `10px`
          }}
        />
  )
}


  export default Soundcloud
