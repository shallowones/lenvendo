import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from 'containers'
import store from './services/store'
import './styles/main.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
