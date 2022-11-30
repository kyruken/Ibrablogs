import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import App from './App';
import ErrorPage from './error-page';
import Blogpage from './Blogpage';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/posts/:postId',
    element: <Blogpage />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
