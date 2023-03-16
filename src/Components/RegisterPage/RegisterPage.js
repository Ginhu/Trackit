import {LogoContainer, FormContainer, LinkContainer} from "../LoginPage/LoginStyled"
import Logo from "../../assets/logo-completa.svg"
import { Link } from "react-router-dom"

export default function RegisterPage () {
    return (
        <>
        <LogoContainer>
            <Link to="/">
            <img src={Logo}></img>
            </Link>
        </LogoContainer>

        <FormContainer>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <input placeholder="nome"/>
            <input placeholder="foto"/>
            <button>Entrar</button>

        </FormContainer>

        <LinkContainer>
            <a>Não tem uma conta? Cadastre-se!</a>
        </LinkContainer>
        </>
    )
}