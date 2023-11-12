import React from 'react'
import {NavLink} from "react-router-dom"

const BlogDetail = ({post}) => {
  return (
    <div>
      <div>
        <NavLink to={`/blog/${post.id}`}>
          <span className='para1'>{post.title}</span>
        </NavLink>
        <p className='para2'>
          By <span className='span1'>{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}><span className='span2'>{post.category}</span></NavLink></p>

        <p className='para'>Posted on {post.date} </p>
        <p className='para2'>{post.content}</p>
        <div className='tag-style'>
          {post ?.tags ?.map((tag, index) => (
            <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}><span className='span3'>
              {` #${tag}`}
            </span>
            </NavLink>
          ))}
          {/* eslint-disable-next-line no-undef */}

        </div>

      </div>
    </div>
  )
}

export default BlogDetail
