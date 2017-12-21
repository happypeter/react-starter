import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POSTS:
      return action.posts
    default:
      return state
  }
}

export default combineReducers({
  all
})
