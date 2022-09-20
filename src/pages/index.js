import React from "react";
import { Layout } from "../components";
import { LandingNav } from '../components';

const IndexPage = () => {
  return (
   <Layout pageTitle="landing">
      <div id="landing">
        <div className='header-main'>
          <LandingNav />
        </div>
      </div>
   </Layout>
  )
};

export default IndexPage;
