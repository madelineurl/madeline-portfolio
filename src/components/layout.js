import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Navbar } from '.';
import contact from "./icons/mail.webp";
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
    <main className='main flex'>{children}</main>
    <Link to='/contact/' className="flex">
      <img
        src={contact}
        alt="contact"
        id='mail-icon'
      />
    </Link>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
