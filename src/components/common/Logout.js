import { Component, PropTypes as T } from 'react'
import auth from '../AuthService'

class Logout extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    // destroys the session data
    auth.logout()
    // redirects to login page
    this.context.router.push('/')
  }

  render() {
    return null
  }
}

Logout.contextTypes =  { router: T.object }

export default Logout

