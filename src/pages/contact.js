import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      {/* <p>
        Thanks for taking the time to get to know a bit about me! Write me a message below if you'd like to learn more.
      </p> */}
      <form
        action="https://formspree.io/url.madeline@gmail.com"
        method="post"
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `1rem`
        }}
      >
        <div>
          <Input name='name' placeholder='name'/>
        </div>
        <div>
          <Input name='_replyto' placeholder='email' />
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            placeholder='message'
            style={{
              margin: `.5rem`,
              width: `35%`,
              height: `20vh`
            }}
           >
          </textarea>
        </div>
        <Input name="_gotcha" display='none' />
        <div>
          <button
            type='submit'>
              send
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default Contact
