import React from "react"
import PropTypes from "prop-types"

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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Input
