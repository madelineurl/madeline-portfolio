import React from "react"
import { SEO, Layout, HomeLink } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404"/>
    <div style={{
      position: `absolute`,
      top: `3rem`
    }}>
      <h1>Oops!</h1>
      <p>My portfolio hasn't reached this corner of the Internet (yet).</p>
      <HomeLink />
    </div>
  </Layout>
)

export default NotFoundPage
