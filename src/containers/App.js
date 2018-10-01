import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { List, Controls } from 'components'
import * as actionList from '../services/actions'

/**
 * Main container - App
 */
class App extends Component {
  static propTypes = {
    blockList: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        isSmart: PropTypes.bool,
        inFocus: PropTypes.bool,
        hasRedColor: PropTypes.bool
      })
    ),
    actions: PropTypes.shape({
      addBlock: PropTypes.func.isRequired,
      removeBlock: PropTypes.func.isRequired,
      focusBlock: PropTypes.func.isRequired,
      changeBlockColor: PropTypes.func.isRequired
    })
  }

  render () {
    const { blockList, actions } = this.props

    return (
      <main className='main'>
        <List
          blockList={blockList}
          removeBlock={index => actions.removeBlock(index)}
          focusBlock={index => actions.focusBlock(index)}
          changeBlockColor={index => actions.changeBlockColor(index)}
        />
        <Controls
          blockList={blockList}
          addBlock={isSmart => actions.addBlock(isSmart)}
        />
      </main>
    )
  }
}

const mapStateToProps = ({ blockList }) => ({ blockList })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
