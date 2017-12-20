import React from 'react'
import Posts from '../components/Posts'
import { connect } from 'react-redux'

const PostsContainer = props => <Posts {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps)(PostsContainer)
