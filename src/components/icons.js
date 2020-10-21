import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Icons = () => {
  const data =  useStaticQuery(graphql`
    query {
      mail: file(relativePath: { eq: "mail-icon-black.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedIn: file(relativePath: { eq: "LI-In-Bug.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Link to='/contact/'>
        <Img
          fixed={data.mail.childImageSharp.fixed}
          alt="medium-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </Link>
      <a href='https://github.com/madelineurl'>
        <Img
          fixed={data.github.childImageSharp.fixed}
          alt="github-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </a>
      <a href='https://www.linkedin.com/in/madeline-url/'>
        <Img
          fixed={data.linkedIn.childImageSharp.fixed}
          alt="linkedin-icon"
          style={{
            marginRight: `10px`
          }}
        />
      </a>
      <a href='https://medium.com/@url.madeline/'>
        <Img
          fixed={data.medium.childImageSharp.fixed}
          alt="medium-icon"
        />
      </a>
    </>
  )
}


  export default Icons
