import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Navbar } from '.';
import SocialIcons from "./footer-icons";
import "./layout.css";

const Layout = ({ children }) => (
  <>
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
    <Link to='/contact/' className="flex"></Link>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
