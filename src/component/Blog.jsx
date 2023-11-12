import React from 'react'
import './Blog.css'
import { AppContext } from '../ContextApp/context';
import Spinner from './Spinner';
import { useContext } from 'react';
import BlogDetail from './BlogDetail';

const Blog = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ?
            (<div><p>No Blogs found</p></div>)
            :
            (posts.map((post) => (
              <BlogDetail key={post.id} post={post} />
            )
            ))
        )
      }
    </>
  )
}

export default Blog
