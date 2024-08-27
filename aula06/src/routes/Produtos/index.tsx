import { Link } from "react-router-dom"
import styles from "../../App.module.css"
import { listaprodutos } from "../../listaProduto"

export default function Produtos() {
    return (
        <div className={styles.produtos}>
            <h1>Produtos</h1>
            {listaprodutos.map((prod)=>(
                <div key={prod.id}>
                    {prod.nome} - <Link to={`/editar-produto/:${prod.id}`}>Editar o Produto</Link>
                </div>
            ))}
        </div>
    )
}