import axios from 'axios'
import { POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'

export const loadPosts = () => dispatch => {
  axios.get(POSTS_URL).then(
    res => {
      dispatch({
        type: types.LOAD_POSTS,
        posts: res.data
      })
    }
  )
}
