import './style.css'
import Logo from '../../images/logo.svg';
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header;