import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './social-media-icons';
import { SEO } from '../components';
import { useLocation } from '@reach/router';
import './layout.css';

const seoMetadata = {
  contact: {
    description: ''
  },
  home: {
    description: ''
  },
  success: {
    description: ''
  },
  404: {
    description: ''
  }
}

const Layout = ({ children, pageTitle }) => {
  const { pathname } = useLocation();
  const isLandingPage = pathname === '/';

  return (
    <>
      <SEO
        title={pageTitle}
        description={seoMetadata[pageTitle].description ?? ''} />
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
