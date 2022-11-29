import React from 'react';
import './App.css'
import Header from './components/header';
import Blog from './components/blog';
import Blogpage from './Blogpage';
function App() {
  const [blogs, setBlogs] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState("Homepage");
  const [blogPage, setBlogPage] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setBlogs(data.posts));

  }, [])

  const blogElements = blogs.map(blog => {
    return <Blog
      body={blog.body}
      comments={blog.comments}
      isPublished={blog.isPublished}
      title={blog.title}
      key={blog._id}
      id={blog._id}
      handleClick={() => handleClick(blog._id)}
    />
  })

  function handleClick(blogId) {
    setCurrentPage("Blogpage");
    //I can't think of a better solution for rendering
    //an individual blog page 
    //Currently creates an array of undefined entries
    //If a blogId matches, that entry is defined 
    setBlogPage(blogs.map(blog => {
      if (blog._id === blogId) {
        return <Blogpage
          body={blog.body}
          comments={blog.comments}
          isPublished={blog.isPublished}
          title={blog.title}
          key={blog._id}
          id={blog._id} 
        />
      }
    }));
  }

  function backClick() {
    setCurrentPage("Blogpage" ? "Homepage" : "Blogpage");
  }
  console.log(blogPage);
  return (
    <div className="App">
      <Header></Header>
      {currentPage === "Blogpage" && <button onClick={backClick}>Back</button>}
      {currentPage === "Homepage" && blogElements}
      {currentPage === "Blogpage" && blogPage}
    </div>
  )
}

export default App
