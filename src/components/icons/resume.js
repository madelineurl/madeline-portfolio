import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import styles from "./icons.module.scss"

const ResumeIcon = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "resume.png" }) {
      childImageSharp {
        fixed(width: 150, height: 170) {
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
    <div>
      <Link to='/resume/'>
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </Link>
    </div>
  )
}


export default ResumeIcon;
