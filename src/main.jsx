import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/Global.css'
import App from './App.jsx'
import Ferramentas from './pages/Ferramentas.jsx'
import Precos from './pages/Precos.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/ferramentas", element: <Ferramentas /> },
      { path: "/precos", element: <Precos /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
