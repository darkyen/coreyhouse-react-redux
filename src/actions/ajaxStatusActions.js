import * as types from './actionTypes'

export function beginAJAXCall() {
  return {type: types.BEGIN_AJAX_CALL}
}
export function AJAXCallError() {
  return {type: types.AJAX_CALL_ERROR}
}
