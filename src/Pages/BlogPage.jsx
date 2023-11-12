import React, { useState, useEffect, useContext } from 'react'
import Header from '../component/Header'
import BlogDetails from "../component/BlogDetail"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from '../ContextApp/context'
import "../component/Blog.css"

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch (err) {
      console.log("error occured in blog call", err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className='wrapper'>
      <Header />
      <div  className="topLine-blogWrapper">
        <button onClick={() => navigate(-1)} className='blog-btn'>Back</button>
      </div>

      <div className="container blog-container">
        {
          loading ? <p>loading...</p> :
            blog ? (
              <div>
                <BlogDetails post={blog} />
                <h2>Related Blogs </h2>
                {
                  relatedBlogs.map((post) => (
                    <div key={post.id}>
                      <BlogDetails post={post} />
                    </div>
                  ))
                }
              </div>
            ) : (
              <p>No Blogs Found</p>
            )
        }
      </div>
    </div>
  )
}

export default BlogPage
