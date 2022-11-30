import React from 'react';
import './App.css'
import Header from './components/header';
import Blog from './components/blog';
import Blogpage from './Blogpage';
import { Link } from 'react-router-dom';
function App() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/posts')
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
      {blogElements}
      {/* {currentPage === "Blogpage" && <button onClick={backClick}>Back</button>} */}
      {/* {currentPage === "Homepage" && blogElements}
      {currentPage === "Blogpage" && blogPage} */}
    </div>
  )
}

export default App
