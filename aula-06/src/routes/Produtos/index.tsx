import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";

export default function Produtos() {
    return (
        <>
            <h1>Produto</h1>
            {listaProdutos.map((p) => (
                <div key={p.id}>
                    {p.nome} - <Link to={`editar/${p.id}`}>Editar o Produto</Link>
                </div>
            ))}
        </>
    )
}