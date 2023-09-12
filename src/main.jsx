import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import  ProjectPage from './pages/ProjectPage';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage/index.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element: <NavBar />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/project/:id', element: <ProjectPage />},
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
