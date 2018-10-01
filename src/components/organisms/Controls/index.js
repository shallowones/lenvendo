import React from 'react'
import PropTypes from 'prop-types'

import { Button, InformPanel } from 'components'

Controls.propTypes = {
  blockList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isSmart: PropTypes.bool,
      inFocus: PropTypes.bool,
      hasRedColor: PropTypes.bool
    })
  ),
  addBlock: PropTypes.func.isRequired
}

/**
 * Control list (right side)
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Controls (props) {
  const { blockList, addBlock } = props
  const focusItems = blockList.filter(item => item.inFocus)

  return (
    <div className='right'>
      <Button name='Add dumb block' onClick={() => addBlock()}/>
      <Button name='Add smart block' onClick={() => addBlock(true)}/>
      <InformPanel
        all={blockList.length}
        focused={focusItems.length}
        green={focusItems.filter(item => item.isSmart && !item.hasRedColor).length}
        red={focusItems.filter(item => item.isSmart && item.hasRedColor).length}
      />
    </div>
  )
}
