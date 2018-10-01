import { createStore } from 'redux'

import generateRandomText from '../utils/generateRandomText'
import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  FOCUS_BLOCK,
  CHANGE_BLOCK_COLOR
} from '../utils/constants'

/**
 * Initial state of store
 * @type {{blockList: Array}}
 */
const initialState = {
  blockList: []
}

/**
 * Default block
 * @type {{text: string, isSmart: boolean, inFocus: boolean, hasRedColor: boolean}}
 */
const DEFAULT_ITEM = {
  text: '',
  isSmart: false,
  inFocus: false,
  hasRedColor: false
}

/**
 * Block list reducer
 * @param {{blockList: Array}} state
 * @param {{type: String, payload: *}} action
 * @returns {{blockList: Array}}
 */
const blockListReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_BLOCK:
      return {
        blockList: [
          ...state.blockList,
          {
            ...DEFAULT_ITEM,
            text: generateRandomText(),
            isSmart: payload
          }
        ]
      }
    case REMOVE_BLOCK:
      return {
        blockList: state.blockList.filter((item, index) => index !== payload)
      }
    case FOCUS_BLOCK:
      return {
        blockList: state.blockList.map((item, index) => index === payload
          ? { ...item, inFocus: !item.inFocus }
          : item
        )
      }
    case CHANGE_BLOCK_COLOR:
      return {
        blockList: state.blockList.map((item, index) => index === payload
          ? { ...item, hasRedColor: !item.hasRedColor }
          : item
        )
      }
    default:
      return state
  }
}

export default createStore(blockListReducer)
