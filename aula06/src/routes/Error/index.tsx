import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div>
            <h1>Error 404 - Pagina não encontrada</h1>
            <div>
                <p><Link to="/">Home</Link> </p>
            </div>
        </div>
    );
}