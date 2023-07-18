import logoSVG from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logoSVG} alt="logo"/>
            <p><strong>AluraBooks</strong></p>
        </LogoContainer>
    )
}

export default Logo;
