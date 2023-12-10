import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './social-media-icons';
<<<<<<< HEAD
import { Navbar } from '../components';
=======
import { SEO } from '../components';
>>>>>>> 6973ea4 (lots of progress)
import { useLocation } from '@reach/router';
import './layout.css';


const Layout = ({ children, pageTitle }) => {
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';

  return (
    <>
      <header>
        <SocialIcons />
      </header>
      <main id='main'>
      {
        isLandingPage ? children : <div className='container flex'>{children}</div>
      }
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
