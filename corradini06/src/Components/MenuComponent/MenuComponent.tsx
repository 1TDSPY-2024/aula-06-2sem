import { Link } from "react-router-dom";

export default function MenuComponent(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}></Link>  Home</li>
                    <li><Link to={"/produtos"}></Link>  Home</li>
                    <li><Link to={"/editar/produtos/1"}></Link>  Editar Produto</li>
                </ul>
            </nav>
        </>
    );
}