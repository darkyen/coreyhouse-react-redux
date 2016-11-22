import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function AJAXStatusReducer(state=initialState.numAJAXCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1
  } else if (action.type == types.AJAX_CALL_ERROR || action.type.slice(-8) == '_SUCCESS') {
    return state - 1
  }
  return state
}
