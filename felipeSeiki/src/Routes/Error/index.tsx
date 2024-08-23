import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>
        Erro 404 - Página não encontrada
      </h1>
      <div>
        <p>
          <Link to={"/"}>Home Page</Link>
        </p>
      </div>
    </div>
  )
};