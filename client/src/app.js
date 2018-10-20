import React from 'react'
import { render } from 'react-dom'
import Router from 'containers/router'

import store from 'data/store'
import 'app/styles/main.scss'

const App = () => (
  <Router store={store} />
)

render(<App />, document.getElementById('app'))
