import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './social-media-icons';
import { Navbar } from '../components';
import { useLocation } from '@reach/router';
import './layout.css';


const Layout = ({ children, pageTitle }) => {
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';

  return (
    <>
      <header>
        <SocialIcons />
        { !isLandingPage && <Navbar /> }
      </header>
      <main id='main'>
      {
        isLandingPage ? children : <div className='container flex'>{children}</div>
      }
      </main>
      {/* <Link to='/contact/' className='flex'></Link> */}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
