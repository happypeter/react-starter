import React, { Component } from 'react'
import styled from 'styled-components'
import '../assets/global.css'
import PostsContainer from '../containers/PostsContainer'

class Main extends Component {
  render() {
    return (
      <Wrap>
        <PostsContainer />
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div``
