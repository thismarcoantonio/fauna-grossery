import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isDev } from '../utils/conditions';
import Auth from '../components/auth';
import Resume from '../components/resume';
import Lists from '../components/lists';
import List from '../components/list';

class CustomRouter extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    getToken: PropTypes.func,
    token: PropTypes.string
  }

  componentDidMount() {
    this.props.getToken();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        {!this.props.loading ? (
          <Router>
            {!this.props.token ? (
              <Route path="/" component={Auth} />
            ) : (
              <Fragment>
                <Route path="/" component={Resume} />
                <Route path="/lists" component={Lists} />
                <Route path="/lists/:id" component={List} />
              </Fragment>
            )}
          </Router>
        ) : (
          <div>Loading</div>
        )}
      </Provider>
    );
  }
}

export default isDev ? hot(module)(CustomRouter) : CustomRouter;
