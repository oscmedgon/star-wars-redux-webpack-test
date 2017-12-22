import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import configureStore from './store'
import initialState from './reducers/initialState'
const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
