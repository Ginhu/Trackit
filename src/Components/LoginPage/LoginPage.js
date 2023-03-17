import {LogoContainer, FormContainer, LinkContainer} from "./LoginStyled"
import Logo from "../../assets/logo-completa.svg"
import { Link } from "react-router-dom"
export default function LoginPage() {
    return (
        <>
        <LogoContainer>
                <img src={Logo}/>
        </LogoContainer>

        <FormContainer>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <button>Entrar</button>

        </FormContainer>

        <LinkContainer>
            <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LinkContainer>
        </>
    )
}