import React from "react";
import { Layout } from "../components";

const NotFoundPage = () => (
  <Layout pageTitle="404">
    <p id="not-found" className="flex">
      You've lost your way
    </p>
    <a href="/">Home</a>
  </Layout>
);

export default NotFoundPage;

export function Head() {
  <title>Page Not Found</title>;
}
