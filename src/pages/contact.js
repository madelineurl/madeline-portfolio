import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"
import Label from "../components/label"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleNameChange = (evt) => {
    setName(evt.target.value)
    //console.log(name)
  }

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
    //console.log(email)
  }

  const handleMsgChange = (evt) => {
    setMsg(evt.target.value)
    //console.log(msg)
  }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   console.log('what next?')
  //   setName('')
  //   setEmail('')
  //   setMsg('')
  // }

  return (
    <Layout>
      <SEO title="contact" />
      <p>
        Thanks for taking the time to get to know a bit about me! Write me a message below if you'd like to learn more.
      </p>
      <form
        action="https://formspree.io/url.madeline@gmail.com"
        method="post"
        style={{
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <div>
          <Label name='name'/>
          <Input name='name' handleChange={handleNameChange} />
        </div>
        <div>
          <Label name='email'/>
          <Input name='_replyto' handleChange={handleEmailChange} />
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            onChange={handleMsgChange} >
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
