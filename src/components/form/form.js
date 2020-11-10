import React from "react"
import Input from "./input"

import styles from './form.module.css'

const Form = () => (
  <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      method="post"
      // action="/pages/success"
      className={styles.form}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />
      <div>
        <Input
          name='name'
          placeholder='name'
          className={styles.input}
        />
      </div>
      <div>
        <Input
          name='_replyto'
          placeholder='email'
          className={styles.input}
        />
      </div>
      <div>
        <textarea
          type='text'
          name='message'
          placeholder='message'
          className={styles.message}
          >
        </textarea>
      </div>
      <Input name="bot-field" className={styles.gotcha} />
      <div>
        <button
          type='submit'>
            send
        </button>
      </div>
  </form>
)

export default Form;
