import './style.css';
const textoOpcoes = ["Categorias", "Favoritos", "Minha estante"];

function OpcoesHeader() {
    return (
        <ul className="opcoes">
            { textoOpcoes.map((opcao) => (
            <li className="opcao"><p>{opcao}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;