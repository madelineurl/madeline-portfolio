import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./icons.module.scss"

const Planet = ({ link }) => {
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
    <Link to={link} >
      <Img fixed={data.placeholderImage.childImageSharp.fixed}
       className={styles.xibis}/>
    </Link>
  )
}

export default Planet
