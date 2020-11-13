import React from "react"
import { Layout, SEO, ContactForm } from "../components"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      {/* <h3>contact</h3> */}
      <ContactForm />
    </Layout>
  )
}

export default Contact
