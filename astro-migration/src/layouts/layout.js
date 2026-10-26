import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './social-media-icons';

import { Navbar } from '../components';

import SocialIcons from '../../astro-migration/src/components/social-media-icons';


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
