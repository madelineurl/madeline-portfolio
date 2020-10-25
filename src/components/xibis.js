import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Xibis = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Planet-Aguilera.png" }) {
        childImageSharp {
          fixed(width: 230, height: 230) {
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
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Link>
  )
}

export default Xibis
