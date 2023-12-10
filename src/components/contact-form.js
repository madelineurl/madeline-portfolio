import React, { useReducer, useState } from 'react';
import { navigate } from 'gatsby-link';
import { submitContactRequest } from '../services/form/form-api-service';
import { validateFormData } from '../services/form/form-validation-service';

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
  const warningClass = warning ? 'warning show' : 'warning';

  const handleChange = evt => {
    setWarning(false);
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!validateFormData(userInput)) {
      setWarning(true);
    } else {
      const form = evt.target;
      const formName = form.getAttribute('name');

      try {
        submitContactRequest(formName, userInput);
        navigate(form.getAttribute('action'));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
  <>
    <form
        name='contact'
        data-netlify='true'
        netlify-honeypot='bot-field'
        method='post'
        action='/success/'
        className='form'
        onSubmit={handleSubmit}
      >
        <div className={warningClass}>Please fill out all fields</div>
        <input
          type='hidden'
          name='form-name'
          value='contact'
        />
        <input
          type='hidden'
          name='bot-field'
        />
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={handleChange}
          value={userInput.name}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={handleChange}
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
            className='btn enlarge flex'
            disabled={disabled}
          >
            Send
          </button>
        </div>
    </form>
  </>
);
};

export default ContactForm;
