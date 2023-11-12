import React from 'react'
import Header from '../component/Header'
import Blog from '../component/Blog'
import Pagination from '../component/Pagination'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container home-container'>
        <Blog />
      </div>
      <Pagination />
    </div>
  )
}

export default Home
