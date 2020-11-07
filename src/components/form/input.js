import React from "react"

// import styles from "./form.module.css"

const Input = ({ name, placeholder, className }) => (
  <input
    type='text'
    name={name}
    placeholder={placeholder}
    className={className}
  />
)

export default Input
