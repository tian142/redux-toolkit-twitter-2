import React from 'react'

import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const mapPosts = posts.map((post) => (
    <article>
      <h4>{post.title}</h4>
      <h6>{post.content}</h6>
    </article>
  ))

  return (
    <section>
      <h3>Posts</h3>
      <div>{mapPosts}</div>
    </section>
  )
}
