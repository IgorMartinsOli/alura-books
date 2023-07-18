import './style.css'
import logoSVG from '../../images/logo.svg';

function Logo() {
    return (
        <div className="logo">
                <img
                    src={logoSVG}
                    alt="logo"
                    className="logo-img"
                ></img>
            <p><strong>AluraBooks</strong></p>
        </div>
    )
}

export default Logo;
