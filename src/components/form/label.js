import React from "react"
import PropTypes from "prop-types"

const Label = ({ name }) => (
  <label
    htmlFor={name} >
      {name}
  </label>
)

Label.propTypes = {
  name: PropTypes.string.isRequired
}

export default Label
