import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./icons.module.scss"

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

  const [label, setLabel] = useState(false)
  const labelClass = label ? `${styles.show} ${styles.resumeLabel}` : styles.resumeLabel;

  const showLabel = () => {
    setLabel(true);
  }

  const hideLabel = () => {
    setLabel(false);
  }

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <div className={styles.resume}>
      <a onMouseEnter={showLabel}
          onMouseLeave={hideLabel} target="_blank" rel="noreferrer" href='/resume/'>
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      </a>
      <div className={labelClass}>RESUME</div>
    </div>
  )
}


export default ResumeIcon;
