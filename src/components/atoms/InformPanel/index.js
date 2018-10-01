import React from 'react'
import PropTypes from 'prop-types'

InformPanel.propTypes = {
  all: PropTypes.number.isRequired,
  focused: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  red: PropTypes.number.isRequired
}

/**
 * Panel with information about counts of blocks
 * @param props
 * @returns {*}
 * @constructor
 */
export default function InformPanel (props) {
  const { all, focused, green, red } = props

  return (
    <div className='count'>
      <div className='count-line'>{`All: ${all}`}</div>
      <div className='count-line'>{`Focused: ${focused}`}</div>
      <div className='count-line'>&nbsp;&nbsp;{`• green: ${green}`}</div>
      <div className='count-line'>&nbsp;&nbsp;{`• red: ${red}`}</div>
    </div>
  )
}
