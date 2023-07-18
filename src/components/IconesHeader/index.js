import perfilSGV from '../../images/perfil.svg';
import sacolaSGV from '../../images/sacola.svg';
import styled from 'styled-components';
const icones = [perfilSGV, sacolaSGV];

const Icone = styled.li`
    margin-right: 30px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader (){
    return (
        <Icones>
            { icones.map((icone) => (
            <Icone><img src={icone}  alt="Icone representando coisa"></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;