import React from "react";
import { SEO, LandingLayout, LandingHeader } from "../components";

const IndexPage = () => (
  <LandingLayout>
    <SEO title="home" />
      <LandingHeader />
  </LandingLayout>
);

export default IndexPage;
