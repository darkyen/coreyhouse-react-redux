import {combineReducers} from 'redux'
import courses from './course'
import authors from './author'

const rootReducer = combineReducers({
  courses,
  authors
})

export default rootReducer
