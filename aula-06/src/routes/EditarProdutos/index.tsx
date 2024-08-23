import { useNavigate, useParams } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"

export default function EditarProdutos() {

    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter( l => l.id == id )
    const produto = proc[0]

    const salvar = () => {
        alert(`Produto ${produto.nome} editado com sucesso`)
        navegacao("/produtos")
    }

    return (
        <>
            <h1>Editando o produto</h1>
            <p>Editando os dados do produto {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </>
    )
}