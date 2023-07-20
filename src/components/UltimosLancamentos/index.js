import { livros } from "./dadosUltimosLancamentos"
import Titulo from '../Titulo'
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"
import livro from '../../images/livro2.png'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >Ultimos lançamentos</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez voce se interesse por"
                subtitulo="Angular 11"
                descricao="construindo uma aplicação com a plataforma Google"
                imagem={livro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos