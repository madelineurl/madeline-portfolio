import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Icon from "./icon"
import styles from "./styling/icons/icons.module.scss"

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
    <div className={styles.iconContainer}>
      <Link to='/contact/' >
        <Img
          fixed={data.mail.childImageSharp.fixed}
          alt="medium-icon"
          className={styles.icon}
        />
      </Link>
      <Icon
        name='github'
        url='https://github.com/madelineurl'
        image={data.github.childImageSharp.fixed}
      />
      <Icon
        name='medium'
        url='https://medium.com/@url.madeline/'
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
