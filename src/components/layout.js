import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Icons, Header, Particles } from '../components'
// import Header from "./madeline/header"
// import Navbar from ".."
import "./layout.css"

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
      <Particles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <Navbar /> */}
      <div className='main'>
        <main>{children}</main>
        <footer className='footer'>
          <Icons />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
