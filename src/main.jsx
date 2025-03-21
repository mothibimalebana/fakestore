import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './assets/components/content/Shop.jsx'
import Cart from './assets/components/content/Cart.jsx'
import Product from './assets/components/content/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, path: 'shop', element: <Shop/>},
      {path: 'cart', element: <Cart/>},
      {path: 'shop/:id', element: <Product/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
