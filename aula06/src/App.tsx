import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
export default function App() {
  return (
    <div className={styles.container}>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}