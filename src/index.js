import React from 'react'
import App from './containers/App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
