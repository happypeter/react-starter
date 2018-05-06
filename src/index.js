import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'


let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require(`redux-logger`)
  middleware = [...middleware, logger]
}


const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
