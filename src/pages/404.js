import React from "react";
import { SEO, Layout, TemplateLink } from "../components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404"/>
    <div style={{
      display: `flex`,
      flexDirection: 'column',
      justifyContent: `center`,
      fontFamily: `Questrial`
    }}>
      <h1>Oops!</h1>
      <p style={{ fontFamily: `inherit` }}>My portfolio hasn't reached this corner of the Internet yet</p>
      <TemplateLink link='home'>
        Home
      </TemplateLink >
    </div>
  </Layout>
);

export default NotFoundPage;
