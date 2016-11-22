import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/course/CoursesPage'
import ManageCoursePage from './components/course/ManageCoursePage'
import auth from './components/AuthService'
import Login from './components/common/Login'
import Logout from './components/common/Logout'

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
  </Route>
)
