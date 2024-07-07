import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import PortfolioDetails from './pages/PortfolioDetails.tsx'


// import 'swiper/css/bundles'
import './assets/css/style.css'
import './assets/scss/style.scss'

const router = createBrowserRouter([
 
    { path: '/', element: <App /> },
    { path: '/portfolio-details.html', element: <PortfolioDetails /> },
    
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
