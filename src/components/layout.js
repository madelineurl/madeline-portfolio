import React from "react";
import PropTypes from "prop-types";
import SocialIcons from "./footer-icons";
import { SEO } from '../components';
import "./layout.css";

const seoMetadata = {
  contact: {
    description: ''
  },
  landing: {
    description: ''
  },
  success: {
    description: ''
  },
  404: {
    description: ''
  }
}

const Layout = ({ children, pageTitle }) => (
  <>
    <SEO
      title={pageTitle}
      description={seoMetadata[pageTitle].description} />
    <header>
      <SocialIcons />
      {/* { window.location.pathname !== '/' && <Navbar /> } */}
    </header>
    <main id="main">
    {/* {
      window.location.pathname === '/' ?
        children : <div className="container flex">{children}</div>
    } */}
    {children}
    </main>
    {/* <Link to='/contact/' className="flex"></Link> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
