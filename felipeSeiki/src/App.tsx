import { Outlet } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import styles from "./App.module.css";

export default function App(){
  return(
    <div className={styles.container}>
      <Cabecalho/>
      <Rodape />
      <Outlet />
    </div>
  )
};