import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

  const Resume = () => {
    const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Madeline-Higgins-Software-Engineer-Resume-Oct-2020" }) {
        name
        extension
        publicURL
      }
    }
  `)

  const simulateClick = (evt) => {
    evt.click(resume.pdf.publicURL)
  }

  console.log(resume)
  return (
    <>
      <SEO title='resume' />
      <a ref={simulateClick} href={resume.pdf.publicURL}>Link to resume</a>
    </>
  )
}

export default Resume
