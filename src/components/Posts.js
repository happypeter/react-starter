import React, { Component } from 'react'
import styled from 'styled-components'

class Posts extends Component {
  render () {
    const { loadPosts, posts } = this.props
    return (
      <Wrap>
        <Button onClick={loadPosts}>
          加载文章
        </Button>
        {
          posts.map( t => (
            <div key={t.id}>
              {t.title}
            </div>
          ))
        }
      </Wrap>
    )
  }
}

export default Posts

const Wrap = styled.div``

const Button = styled.div`
  display: inline-block;
  padding: 5px 10px;
  color: white;
  background: #00bcd4;
  cursor: pointer;
`
