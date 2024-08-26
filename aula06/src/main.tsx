import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from "./routes/Home"
import Produtos from "./routes/Produtos"
import EditarProdutos from "./routes/EditarProdutos"
import Erro from "./routes/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },{
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
