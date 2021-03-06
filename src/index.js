/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {loadCourses} from './actions/course'
import {loadAuthors} from './actions/author'
import routes from './routes'

import './styles/styles.css'
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
