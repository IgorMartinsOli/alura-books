import styled from 'styled-components';
const textoOpcoes = ["Categorias", "Favoritos", "Minha estante"];

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map((opcao) => (
            <Opcao><p>{opcao}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;