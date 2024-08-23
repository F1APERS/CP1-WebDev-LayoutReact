// Import das funcionalidades
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Import das páginas
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import NotFound from './pages/NotFound.jsx'
// Import dos arquivos de estilo
import './style/index.css'
import './style/home.css'
import './style/sobre.css'
import './style/contato.css'

// Função que cria e nomeia os caminhos do app
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'Home', element: <Home />},
      {path: 'Sobre', element: <Sobre />},
      {path: 'Contato', element: <Contato />},
      {path: '*', element: <NotFound />}
    ]
  }
])

// Função que renderiza e coloca em funcionamento o "routeador"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
