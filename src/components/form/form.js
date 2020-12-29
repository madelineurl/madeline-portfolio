import React, { useReducer, useState } from "react"
import Input from "./input"
import styles from './form.module.css'
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key =>
      encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [warning, setWarning] = useState(false);
  const [userInput, setUserInput] = useReducer(
  (state, newState) => ({ ...state, ...newState}),
    {
      name: '',
      email: '',
      message: ''
    }
  );

  const disabled = userInput ? false : true;
  const warningClass = warning ? styles.warning : styles.none;

  const handleChange = evt => {
    setWarning(false);
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { name, email, message } = userInput;
    if (!name || !email || !message) {
      setWarning(true);
    } else {
      const form = evt.target;
      try {
          await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...userInput
          })
        });
        navigate(form.getAttribute("action"));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
  <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      method="post"
      action="/success/"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />
      <input
        type="hidden"
        name="bot-field"
      />
      <Input
        name='name'
        placeholder='name'
        handleChange={handleChange}
        value={userInput.name}
      />
      <Input
        name='email'
        placeholder='email'
        handleChange={handleChange}
        value={userInput.email}
      />
      <textarea
        type='text'
        name='message'
        placeholder='message'
        onChange={handleChange}
        value={userInput.message}
        >
      </textarea>
      <div>
        <button
          type='submit'
          name='submit-button'
          disabled={disabled}
        >
          send
        </button>
      </div>
      <div className={warningClass}>please fill out all the fields!</div>
  </form>
);
};

export default ContactForm;
