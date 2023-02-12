import React from 'react'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReaccionButtons from './ReaccionButtons';

const PostsExcerpt = ({post}) => {
  return (
    <article style={{border: "1px solid gray", borderRadius: '30px', backgroundColor: '#000000'}}>
        <h3 style={{color: '#40E0D0'}}>{post.title}</h3>
        <p style={{color: '#fff'}}>{post.body.substring(0, 100)}</p>
        <p style={{color: '#fff', fontSize: '10px'}}>
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
        </p>
        <ReaccionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt