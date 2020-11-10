import React from "react"
import { Layout, SEO, HomeLink, ContactForm } from "../components"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <ContactForm />
      <HomeLink />
    </Layout>
  )
}

export default Contact
