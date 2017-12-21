import React from 'react'
import Posts from '../components/Posts'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'

const PostsContainer = props => <Posts {...props} />

const mapStateToProps = state => ({
  posts: state.post.all
})

export default connect(mapStateToProps, {
  loadPosts
})(PostsContainer)
