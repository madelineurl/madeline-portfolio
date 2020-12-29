import React from "react";
import { SEO, Layout, HomeLink } from "../components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404"/>
    <div style={{
      display: `flex`,
      flexDirection: 'column',
      justifyContent: `center`
    }}>
      <h1>Oops!</h1>
      <p style={{ fontFamily: `Roboto` }}>My portfolio hasn't reached this corner of the Internet yet</p>
      <HomeLink />
    </div>
  </Layout>
);

export default NotFoundPage;
