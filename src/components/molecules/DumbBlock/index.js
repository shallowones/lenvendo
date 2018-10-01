import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

/**
 * Dumb block
 */
export default class DumbBlock extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    inFocus: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={this.getClassName()} onClick={() => this.onBlockClick()}>
        {this.props.text}
        <Button name='X' onClick={event => this.onRemoveButtonClick(event)}/>
      </div>
    )
  }

  getClassName () {
    let className = 'block'

    if (this.props.inFocus) {
      className += ' focus'
    }

    return className
  }

  onBlockClick () {
    return this.props.onFocus()
  }

  onRemoveButtonClick (event) {
    event.stopPropagation()

    return this.props.onRemove()
  }
}
