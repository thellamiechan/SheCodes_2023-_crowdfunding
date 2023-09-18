import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import  ProjectPage from './pages/ProjectPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <NavBar />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/projects/:id', element: <ProjectPage />},
      {path:'/about', element: <AboutPage />},
      {path:'/contact', element:<ContactPage />},
      {path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
