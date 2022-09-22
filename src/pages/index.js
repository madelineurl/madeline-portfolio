import React from 'react';
import { Layout } from '../components';
import { LandingPageNavigation } from '../components';

const IndexPage = () => {
  return (
   <Layout pageTitle='home'>
      <div id='landing'>
        <div className='header-main'>
          <LandingPageNavigation />
        </div>
      </div>
   </Layout>
  )
};

export default IndexPage;
