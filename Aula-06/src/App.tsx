import { Outlet } from "react-router-dom"
import styles from "./App.modules.css"

function App() {
  return (
    <div>
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </div>
  )
}

export default App