import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from "./routes/Home/index.tsx"
import Produtos from "./routes/Produtos/index.tsx"
import Erro from "./routes/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EditarProduto from './routes/EditarProduto/index.tsx'

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
      },
      {
        path: "/editar-produto/:id",
        element: <EditarProduto/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
