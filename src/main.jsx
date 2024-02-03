import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Blogs from './pages/Blogs.jsx';
import Register from './pages/Register.jsx';
import AppContextProvider from './context/AppContext.jsx';
import BlogDetailed from './pages/BlogDetailed.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blogs/:id',
        element: <BlogDetailed />,
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
