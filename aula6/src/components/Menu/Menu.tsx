import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/"></Link>Home</li>
                <li><Link to="/Produtos"></Link>Produtos</li>
                <li><Link to="/Editar/Produtos/1"></Link>EditarProduto - 1</li>
            </ul>
        </nav>
    );
}