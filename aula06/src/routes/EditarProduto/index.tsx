import { useParams, useNavigate } from "react-router-dom"
import { listaprodutos } from "../../listaProduto"

export default function EditarProduto() {

    const lista = listaprodutos
    const navegacao = useNavigate()
    const {id} = useParams()
    console.log(id);
    
    const proc = lista.filter(prod => (prod.id).toString() == id?.slice(1))
    const produto = proc[0]

    const salvar = ()=> {
        alert(`Produto ${produto.nome} editado com sucesso`)
        return navegacao('/produtos')
    }

    return (
        <main>
            <h1>Editando Produto</h1>
            <p>Editando os dados do produto: {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}