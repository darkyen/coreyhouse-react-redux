import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function AuthorReducer(state = initialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      state = action.authors
      break
  }

  return state
}
