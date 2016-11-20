import * as types from './actionTypes'
import AuthorAPI from '../api/mockAuthorAPI'

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors() {
  return dispatch => AuthorAPI.getAllAuthors().then(authors => {
    dispatch(loadAuthorsSuccess(authors))
  }).catch(error => { throw(error) })
}
