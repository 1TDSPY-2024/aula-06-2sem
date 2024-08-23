import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home/index.tsx';
import Produtos from './Routes/Produtos/index.tsx';
import EditarProdutos from './Routes/EditarProdutos/index.tsx';
import Error from './Routes/Error/index.tsx';

const routes = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/produtos", element: <Produtos/>},
    {path:"/editar/produtos/:id", element: <EditarProdutos/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
