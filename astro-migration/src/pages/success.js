import React from 'react';
import { Layout, BackToHomeLink } from '../components';

const Success = () => (
  <Layout pageTitle='success'>
    <div id='success'>
      <p>Thanks for the message</p>
      <BackToHomeLink />
    </div>
  </Layout>
);

export default Success;
