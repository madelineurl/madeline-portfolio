import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import styles from "../components/madeline/modal.module.css"

const Resume = () => {
  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Madeline-Higgins-Software-Engineer-Resume-Nov-2020" }) {
        name
        extension
        publicURL
      }
    }
  `)

  const simulateClick = (evt) => {
    evt.click(resume.pdf.publicURL)
  }

  return (
    <>
      <SEO title='resume' />
      <a
        ref={simulateClick}
        href={resume.pdf.publicURL}
        className={styles.loading}
      >
          Loading...
      </a>
    </>
  )
}

export default Resume
