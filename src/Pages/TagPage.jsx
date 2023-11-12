import React from 'react'
import Header from '../component/Header'
import Blog from '../component/Blog'
import Pagination from '../component/Pagination'
import { useLocation, useNavigate } from "react-router-dom"
import "../component/Blog.css"

const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className='wrapper'>
      <Header />
      <div className="topLine-tagWrapper">
        <button onClick={() => navigate(-1)} className="tag-btn">Back</button>
        <h2>Blogs Tagged<span>#{tag}</span></h2>
      </div>
      <div className="container tag-container">
      <Blog />
      </div>
      <Pagination />
    </div>
  )
}

export default TagPage
