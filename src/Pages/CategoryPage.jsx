import React from 'react'
import Header from '../component/Header'
import Blog from '../component/Blog'
import Pagination from '../component/Pagination'
import { useLocation, useNavigate } from "react-router-dom"
import "../component/Blog.css"

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className='wrapper'>
      <Header />
      <div className="topLine-categoryWrapper">
        <button onClick={() => navigate(-1)} className="category-btn">Back</button>
        <h2>Blogs On<span>{category}</span></h2>
      </div>
      <div className="container category-container">
        <Blog />
      </div>
      <Pagination />
    </div>
  )
}

export default CategoryPage
