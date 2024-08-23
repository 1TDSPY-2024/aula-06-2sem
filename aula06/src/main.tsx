import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './roules/Home/index.tsx';
import Produtos from './roules/Produtos/index.tsx';
import EditarProdutos from './roules/EditarProdutos/index.tsx';
import Error from './roules/Error/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
