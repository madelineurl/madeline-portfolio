import React from "react";
import { Layout, SEO } from "../components";
import { Link } from 'gatsby';

const Success = () => (
  <Layout>
    <SEO title="success"/>
    <div id="success">
      <span>Thanks for the message.</span>
      <Link to="/">Back to home</Link>
    </div>
  </Layout>
);

export default Success;
