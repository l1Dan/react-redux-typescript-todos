import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './containers/app'
import { TODO_LIST_REQUEST } from './constants'

store.dispatch({ type: TODO_LIST_REQUEST })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
