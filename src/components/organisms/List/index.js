import React from 'react'
import PropTypes from 'prop-types'

import { DumbBlock, SmartBlock } from 'components'

List.propTypes = {
  blockList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isSmart: PropTypes.bool,
      inFocus: PropTypes.bool,
      hasRedColor: PropTypes.bool
    })
  ),
  removeBlock: PropTypes.func.isRequired,
  focusBlock: PropTypes.func.isRequired,
  changeBlockColor: PropTypes.func.isRequired
}

/**
 * Block list (left side)
 * @param props
 * @returns {*}
 * @constructor
 */
export default function List (props) {
  const { blockList, removeBlock, focusBlock, changeBlockColor } = props

  return (
    <div className='left'>
      {blockList && blockList.map((item, index) => {
        const blockProps = {
          key: index,
          text: item.text,
          inFocus: item.inFocus,
          onRemove: () => removeBlock(index),
          onFocus: () => focusBlock(index)
        }

        if (item.isSmart) {
          return (
            <SmartBlock
              hasRedColor={item.hasRedColor}
              onDoubleClick={() => changeBlockColor(index)}
              {...blockProps}
            />
          )
        }

        return (
          <DumbBlock {...blockProps}/>
        )
      })}
    </div>
  )
}
