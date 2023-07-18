import perfilSGV from '../../images/perfil.svg';
import sacolaSGV from '../../images/sacola.svg';
import './style.css';
const icones = [perfilSGV, sacolaSGV];

function IconesHeader (){
    return (
        <ul className="icones">
            { icones.map((icone) => (
            <li className="icone"><img src={icone}  alt="Icone representando coisa"></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader;