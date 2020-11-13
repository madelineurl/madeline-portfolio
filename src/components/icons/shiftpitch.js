import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./icons.module.scss"

const Shiftpitch = ({ link }) => {
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
    <Link to={link} >
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        className={styles.shiftpitch}/>
    </Link>
  )
}

export default Shiftpitch
