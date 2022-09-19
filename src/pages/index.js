import React from "react";
import { Layout } from "../components";
import { LandingNav } from '../components';
// import { IKImage, IKContext } from 'imagekitio-react'

const IndexPage = () => {
  return (
   <Layout>
      {/* <IKContext urlEndpoint="https://ik.imagekit.io/https://ik.imagekit.io/vpvecpntw">
        <IKImage path="/default-image.jpg" />
      </IKContext> */}
      <div id="landing">
        <div className='header-main'>
          <LandingNav />
        </div>
      </div>
   </Layout>
  )
};

export default IndexPage;
