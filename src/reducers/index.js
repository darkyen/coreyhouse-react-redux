import {combineReducers} from 'redux'
import courses from './course'
import authors from './author'
import ajaxCalls from './AJAXStatusReducer'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCalls
})

export default rootReducer
