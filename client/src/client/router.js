import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthPage from '../components/auth-page'

class CustomRouter extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path="/" component={AuthPage} />
        </Router>
      </Provider>
    )
  }
}

export default CustomRouter
