import React from 'react'
import { Link } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { useGetPostQuery, useGetPostsQuery } from '../api/apiSlice'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

// react router
export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)
  // const post = useSelector(selectPostById)

  let content

  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    )
  }

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }
  return <section>{content}</section>
}
