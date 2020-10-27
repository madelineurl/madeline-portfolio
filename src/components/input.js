import React from "react"

const Input = (props) => (
  <input
    type='text'
    name={props.name}
    placeholder={props.placeholder}
    // onChange={props.handleChange}
      style={{
        width: `40%`,
        margin: `.5rem`,
        display: props.display
      }}
    >
  </input>
)

export default Input
