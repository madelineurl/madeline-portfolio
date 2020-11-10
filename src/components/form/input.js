import React from "react"

// import styles from "./form.module.css"

const Input = ({ name, placeholder, value, className, handleChange }) => (
  <input
    type='text'
    name={name}
    placeholder={placeholder}
    className={className}
    onChange={handleChange}
    value={value}
  />
)

export default Input
