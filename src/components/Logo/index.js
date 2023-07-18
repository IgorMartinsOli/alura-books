import './style.css'
import LogoSVG from '../../images/logo.svg';

function Logo() {
    return (
        <div className="logo">
            <img
                src={LogoSVG}
                alt="logo"
                className="logo-img"
            ></img>
            <p><strong>AluraBooks</strong></p>
        </div>
    )
}

export default Logo;
