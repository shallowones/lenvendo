import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  FOCUS_BLOCK,
  CHANGE_BLOCK_COLOR
} from '../utils/constants'

/**
 * Action of adding block
 * @returns {{type: string, promise: function}}
 */
export const addBlock = isSmart => ({
  type: ADD_BLOCK,
  payload: isSmart
})

/**
 * Action of removing block
 * @returns {{type: string, promise: function}}
 */
export const removeBlock = removeItemIndex => ({
  type: REMOVE_BLOCK,
  payload: removeItemIndex
})

/**
 * Action of focusing block
 * @returns {{type: string, promise: function}}
 */
export const focusBlock = focusItemIndex => ({
  type: FOCUS_BLOCK,
  payload: focusItemIndex
})

/**
 * Action of changing block color
 * @returns {{type: string, promise: function}}
 */
export const changeBlockColor = focusItemIndex => ({
  type: CHANGE_BLOCK_COLOR,
  payload: focusItemIndex
})
