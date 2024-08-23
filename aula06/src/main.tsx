import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './roules/Home/index.tsx';
import Produtos from './roules/Produtos/index.tsx';
import EditarProdutos from './roules/EditarProdutos/index.tsx';
import Error from './roules/Error/index.tsx';

const routes = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/editar/produtos/:id", element:<EditarProdutos/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
