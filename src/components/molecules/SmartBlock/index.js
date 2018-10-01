import React from 'react'

import { DumbBlock } from 'components'
import { COLOR_CODE_GREEN, COLOR_CODE_RED } from '../../../utils/constants'
import PropTypes from 'prop-types'

const CLICK_DELAY = 250

const BEFORE_REMOVE_MESSAGE = 'Are you sure?'

/**
 * Smart block
 */
export default class SmartBlock extends DumbBlock {
  static propTypes = {
    text: PropTypes.string.isRequired,
    inFocus: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
    hasRedColor: PropTypes.bool.isRequired,
    onDoubleClick: PropTypes.func.isRequired
  }

  state = {
    timer: null,
    clickCount: 0
  }

  getClassName () {
    let className = super.getClassName() + ' '

    className += (this.props.hasRedColor)
      ? COLOR_CODE_RED
      : COLOR_CODE_GREEN

    return className
  }

  onBlockClick (event) {
    const { timer, clickCount } = this.state

    if (clickCount > 0) {
      clearTimeout(timer)
      this.setState({ timer: null, clickCount: 0 })

      return this.props.onDoubleClick()
    }

    this.setState({
      timer: setTimeout(() => {
        this.props.onFocus()
        this.setState({ timer: null, clickCount: 0 })
      }, CLICK_DELAY),
      clickCount: clickCount + 1
    })
  }

  onRemoveButtonClick (event) {
    event.stopPropagation()

    return confirm(BEFORE_REMOVE_MESSAGE) && this.props.onRemove()
  }
}
