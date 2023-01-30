import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { Home } from './pages/Home'
import { Department } from './pages/Department'
import { Error } from './pages/Error'
import { Courses } from './pages/Courses'
import { Professors } from './pages/Professors'
import { Students } from './pages/Students'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'department',
        element: <Department />
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'professors',
        element: <Professors />
      },
      {
        path: 'students',
        element: <Students />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
