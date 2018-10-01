import React from 'react'
import PropTypes from 'prop-types'

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

/**
 * Just a native html-button wrapper
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Button (props) {
  const { name, onClick } = props

  return (
    <button type='button' onClick={onClick}>{name}</button>
  )
}
