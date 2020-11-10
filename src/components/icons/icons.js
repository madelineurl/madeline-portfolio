import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Icon from "./icon"
import styles from "./icons.module.scss"

const Icons = () => {
  const data =  useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "ig-icon.png" }) {
        childImageSharp {
          fixed(width: 52, height: 52) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mail: file(relativePath: { eq: "mail-circle.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedIn: file(relativePath: { eq: "circle.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium-circle.webp" }) {
        childImageSharp {
          fixed(width: 49, height: 49) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={styles.iconContainer}>
      <Link to='/contact/' >
        <Img
          fixed={data.mail.childImageSharp.fixed}
          alt="medium-icon"
          className={styles.icon}
        />
      </Link>
      {/* <Icon
        name='instagram'
        url='https://instagram.com/soft.content'
        image={data.instagram.childImageSharp.fixed}
      /> */}
      <Icon
        name='github'
        url='https://github.com/madelineurl'
        image={data.github.childImageSharp.fixed}
      />
      <Icon
        name='medium'
        url='https://madeline-url.medium.com/'
        image={data.medium.childImageSharp.fixed}
      />
      <Icon
        name='linked-in'
        url='https://www.linkedin.com/in/madeline-url/'
        image={data.linkedIn.childImageSharp.fixed}
      />
    </div>
  )
}


  export default Icons
