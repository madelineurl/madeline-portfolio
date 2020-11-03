import React from "react"
import Input from "./input"

const Form = () => (
  <form
      action="https://formspree.io/url.madeline@gmail.com"
      method="post"
      target="_blank"
      rel="noreferrer"
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
            width: `40%`,
            height: `20vh`
          }}
          >
        </textarea>
      </div>
      <Input name="_gotcha" display='none' />
      <div>
        <button
          type='submit'>
            send to url.madeline@gmail.com
        </button>
      </div>
  </form>
)

export default Form;
