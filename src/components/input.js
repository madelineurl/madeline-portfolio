import React from "react"

const Input = (props) => (
  <input
    type='text'
    name={props.name}
    onChange={props.handleChange}
      style={{
        width: `10%`,
        display: props.display
      }}
    >
  </input>
)

export default Input
