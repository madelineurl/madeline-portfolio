import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Icons = () => {
  const data =  useStaticQuery(graphql`
    query {
      mail: file(relativePath: { eq: "mail-circle.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedIn: file(relativePath: { eq: "circle.png" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium-circle.webp" }) {
        childImageSharp {
          fixed(width: 33, height: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Link to='/contact/' >
        <Img
          fixed={data.mail.childImageSharp.fixed}
          alt="medium-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </Link>
      <a href='https://github.com/madelineurl' target="_blank" rel="noreferrer">
        <Img
          fixed={data.github.childImageSharp.fixed}
          alt="github-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </a>
      <a href='https://medium.com/@url.madeline/' target="_blank" rel="noreferrer">
        <Img
          fixed={data.medium.childImageSharp.fixed}
          alt="medium-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </a>
      <a href='https://www.linkedin.com/in/madeline-url/' target="_blank" rel="noreferrer">
        <Img
          fixed={data.linkedIn.childImageSharp.fixed}
          alt="linkedin-icon"
        />
      </a>
    </>
  )
}


  export default Icons
