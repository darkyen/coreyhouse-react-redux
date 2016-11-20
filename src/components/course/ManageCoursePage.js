import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/course'
import CourseForm from './CourseForm'

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }

    this.updateCourseState = this.updateCourseState.bind(this)
    this.saveCourse = this.saveCourse.bind(this)
  }

  updateCourseState(event) {
    const field = event.target.name
    let course = this.state.course
    course[field] = event.target.value
    return this.setState({course})
  }

  saveCourse(event) {
    event.preventDefault()
    this.props.actions.saveCourse(this.state.course)
    this.context.router.push('/courses')
  }

  render() {
    const {errors, course} = this.state
    const {authors} = this.props
    return (
      <CourseForm
        allAuthors={authors}
        course={course}
        errors={errors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
      />
    )
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

function getCourseById(courses, id) {
  for (let course of courses) {
    if (course.id == id) { return course }
  }
  return null
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}

  if (courseId) {
    course = getCourseById(state.courses, courseId)
  }
  const authors = state.authors.map((author) => ({ value: author.id, text: `${author.firstName} ${author.lastName}` }))
  return {course, authors}
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
