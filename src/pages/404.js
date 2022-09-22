import React from 'react';
import { Layout, BackToHomeLink } from '../components';

const NotFoundPage = () => (
  <Layout pageTitle='404'>
    <p id='not-found' className='flex'>
     You've lost your way
    </p>
   <BackToHomeLink />
  </Layout>
);

export default NotFoundPage;
