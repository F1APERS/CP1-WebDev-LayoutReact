import { Outlet } from "react-router-dom"
import Header from "./components/header"

// Função que permite mudar o conteúdo principal da página mas manter o Header (não mexer)
function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
