import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FooterIcons, Navbar } from '.';
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <div className='header-main'>
      <header>
        <Link to='/' >
          <h1 className='header-link'>madeline</h1>
        </Link>
      </header>
      <Navbar />
    </div>
    <main className='main'>{children}</main>
    <footer className='footer'>
      <FooterIcons />
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
