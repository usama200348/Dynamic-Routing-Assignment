import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import Layout from './Pages/Layout.jsx'
import SingUp from './Pages/SingUp.jsx'
import Product from './Pages/Product.jsx'
import ResponsiveAppBar from './Componets/ResponsiveAppBar.jsx'

const router=createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'singup',
        element:<SingUp/>
      },
      {
        path:'product',
        element:<Product/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveAppBar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
