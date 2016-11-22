import React, {PropTypes} from 'react'
import Header from './common/Header'
import {connect} from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    )
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
  return { loading: !!state.ajaxCalls }
}

export default connect(mapStateToProps)(App)
