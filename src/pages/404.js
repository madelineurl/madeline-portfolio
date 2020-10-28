import React from "react"
import { SEO, Layout, HomeButton } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404"/>
    <div style={{
      marginTop: `3rem`
    }}>
      <h1>Oops!</h1>
      <p>My portfolio hasn't reached this corner of the Internet (yet).</p>
      <HomeButton />
    </div>
  </Layout>
)

export default NotFoundPage
