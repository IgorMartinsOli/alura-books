import Input from "../Input"
import styled from 'styled-components'
import { useEffect, useState } from "react"
import { getLivros } from "../../services/livros"
import { postFavorito } from "../../services/favoritos"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultadoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Novo estilo para envolver os livros */
    gap: 20px; /* Espaço entre os livros */
`

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    p {
        font-size: 14px;
        margin-bottom: 5px;
    }
    img {
        width: 80px;
        height: 120px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros(){
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    async function insertFavorito(id){
        await postFavorito(id);
        alert('Livro favoritado com sucesso')
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                type='text'
                placeholder='Escreva sua próxima leitura'
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value;
                    console.log('Texto digitado:', textoDigitado);
                    if (livros && livros.length > 0) {
                        const resultado = livros.filter((livro) => livro.nome.includes(textoDigitado));
                        console.log('Livros pesquisados:', resultado);
                        setLivrosPesquisados(resultado);
                    }
                }}
            />
            <ResultadoContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado onClick={() => insertFavorito(livro.id)} key={livro.id}>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={livro.nome}/>
                    </Resultado>
                ))}
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa
