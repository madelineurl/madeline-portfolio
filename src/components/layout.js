/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import Navbar from "./navbar"
import "./layout.css"
import Icons from './icons'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          textAlign: `center`,
          margin: `0 auto`,
          maxWidth: 720,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <div style={{
          position: `absolute`,
          bottom: `.5rem`,
          left: `44%`
        // display: `flex`,
        // justifyContent: `space-around`
        }}>
          <Icons />
        </div>
        <footer style={{
          color: `grey`,
          position: `absolute`,
          bottom: `10px`,
          left: `42vw`,
          fontSize: `.85rem`
        }}>
          {/* copyright © madeline higgins {new Date().getFullYear()} */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
