import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CreateProject from './components/CreateProject';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import { AuthProvider } from './components/AuthProvider';

const router = createBrowserRouter([
  {
    path:'/',
    element: <NavBar />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/projects/:id', element: <ProjectPage />},
      {path:'/about', element: <AboutPage />},
      {path:'/contact', element:<ContactPage />},
      {path:'/projects', element:<CreateProject />},
      {path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router= {router} />
      </AuthProvider>
  </React.StrictMode>,
);
