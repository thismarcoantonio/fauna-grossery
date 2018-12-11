import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Router from 'containers/router';

import store from 'data/store';
import GlobalStyle from './utils/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Router store={store} />
  </Fragment>
);

render(<App />, document.getElementById('app'));
