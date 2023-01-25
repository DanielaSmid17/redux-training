import React from 'react'
import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

export const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} style={{border: "1px solid gray", borderRadius: '30px', backgroundColor: '#000000'}}>
            <h3 style={{color: '#40E0D0'}}>{post.title}</h3>
            <p style={{color: '#fff'}}>{post.content.substring(0, 100)}</p>
            <p style={{color: '#fff', fontSize: '10px'}}>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
        </article>
    ))
  return (
    <div style={{margin: 'auto', width: '20%'}}>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}
export default PostsList