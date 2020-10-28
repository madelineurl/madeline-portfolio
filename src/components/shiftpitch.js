import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import iconStyles from "./styling/icons.module.css"

const Shiftpitch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shiftpitch.png" }) {
        childImageSharp {
          fixed(width: 148, height: 148) {
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
    <Link to="/shiftpitch/" >
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        className={iconStyles.shiftpitch}/>
    </Link>
  )
}

export default Shiftpitch
