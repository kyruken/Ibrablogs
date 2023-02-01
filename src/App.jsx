import React from 'react';
import './App.css'
import Header from './components/header';
import Blog from './components/blog';
import { Link } from 'react-router-dom';
function App() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/posts`)
      .then(response => response.json())
      .then(data => setBlogs(data.posts));

  }, [])

  const blogElements = blogs.map(blog => {
    return <Link to={`${blog._id}`}>
      <Blog
        body={blog.body}
        comments={blog.comments}
        isPublished={blog.isPublished}
        title={blog.title}
        key={blog._id}
        id={blog._id}
        >
        </Blog>
    </Link>
  })

  return (
    <div className="App">
      <Header></Header>
      <div className='flex-row flex-center'>
        <h2>Blogs</h2>
      </div>
      <div className="grid grid-center blog-container padding-lr-5 padding-tb-1">{blogElements}</div>
    </div>
  )
}

export default App
