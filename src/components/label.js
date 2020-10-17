import React from "react"

const Label = (props) => (
  <label
    htmlFor={props.name} >
      {props.name}
  </label>
)

export default Label
