import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import auth from '../AuthService'
import styles from '../styles.module.css'

class Login extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.login = this.login.bind(this)
  }

  login() {
    auth.login()
  }

  render() {
    const { auth } = this.props
    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={this.login}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

Login.propTypes = {
  location: T.object,
  auth: T.object
}

export default Login
