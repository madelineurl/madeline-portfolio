import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Soundcloud = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "soundcloud-icon.png" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
      <a href='https://soundcloud.com/madeline-url'>
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="soundcloud-icon"
          style={{
            //marginRight: `10px`
          }}
        />
      </a>
  )
}


  export default Soundcloud
