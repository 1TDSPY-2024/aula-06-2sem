import { Outlet } from "react-router-dom"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import styles from "./App.module.css"
import Rodape from "./components/Rodape/Rodape"

function App() {
  return (
    <div className={styles.container}>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}

export default App
