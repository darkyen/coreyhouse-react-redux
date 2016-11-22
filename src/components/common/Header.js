import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'
import auth from '../AuthService'

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink className="navbar-brand" to="/" activeClassName="active">CVRM</IndexLink>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/courses" activeClassName="active">Courses</Link></li>
            <li className="active"><Link to="/about" activeClassName="active">About</Link></li>
            { auth.loggedIn() && <li className="active"><Link to="/logout" activeClassName="active">Logout</Link></li> }
          </ul>
          { loading && <img src="loading.svg" /> }
        </div>
      </div>
    </nav>

  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default Header
