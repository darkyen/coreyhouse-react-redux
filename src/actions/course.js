import * as types from './actionTypes'
import CourseAPI from '../api/mockCourseAPI'
import {beginAJAXCall, AJAXCallError} from './ajaxStatusActions'

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course}
}
export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course}
}
export function loadCourses() {
  return dispatch => {
    dispatch(beginAJAXCall())

    CourseAPI.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => { throw(error) })
  }
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAJAXCall())

    return CourseAPI.saveCourse(course).then((course) => {
      if (course.id) {
        dispatch(updateCourseSuccess(course))
      } else {
        dispatch(createCourseSuccess(course))
      }
    }).catch(error => {
      dispatch(AJAXCallError(error))
      throw(error)
    })
  }
}
