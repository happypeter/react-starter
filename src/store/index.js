import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let middlewares = [logger, thunk]

export default createStore(rootReducer, applyMiddleware(...middlewares))
