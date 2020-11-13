import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./icons.module.scss"

const HomeIcon = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "home.png" }) {
      childImageSharp {
        fixed(width: 52, height: 46) {
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
    <div className={styles.homeIcon}>
      <Link to='/home/'>
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </Link>
    </div>
  )
}


export default HomeIcon
