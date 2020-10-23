import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

  const Resume = () => {
    const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Madeline-Higgins-Software-Engineer-Resume-2020.pdf" }) {
        name
        extension
        publicURL
      }
    }
  `)

  console.log(resume)
  return (
    <>
      <SEO title='resume' />
      {/* <a href={resume.pdf}>{resume.pdf.name}</a> */}
    </>
  )
}

export default Resume
