import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "polaroid_headshot.png" }) {
        childImageSharp {
          fixed(width: 150, height: 176) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
          />
}

export default Image
