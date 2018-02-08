import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let middlewares = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middlewares))
