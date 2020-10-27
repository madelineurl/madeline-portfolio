import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Planet = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Planet-Aguilera.png" }) {
        childImageSharp {
          fixed(width: 210, height: 210) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Link to="/xibis/" >
      <Img fixed={data.placeholderImage.childImageSharp.fixed}
       style={{
        top: `4rem`
      }} />
    </Link>
  )
}

export default Planet
