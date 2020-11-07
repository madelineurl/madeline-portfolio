import React from "react"
import Input from "./input"

import styles from './form.module.css'

const Form = () => (
  <form
      action="https://formspree.io/contact@madelineurl.online"
      method="post"
      target="_blank"
      rel="noreferrer"
      className={styles.form}
    >
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
          className={styles.textArea}
          >
        </textarea>
      </div>
      <Input name="_gotcha" className={styles.gotcha} />
      <div>
        <button
          type='submit'>
            send
        </button>
      </div>
  </form>
)

export default Form;
