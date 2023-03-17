import {LogoContainer, FormContainer, LinkContainer} from "./LoginStyled"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { UserContext } from "../../UserContext"

export default function LoginPage({email, setEmail, password, setPassword}) {

    const [disabled, setDisabled] = useState(false)
    const {header, setHeader} = useContext(UserContext)
    const navigate = useNavigate()

    function clickLogin() {
        const body = {email: email, password: password}
        setDisabled(true)

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        .then(
            res => {
                console.log(res.data)
                setHeader({headers: {
                    Authorization: res.data.token
                  }})
                navigate("/hoje")
            }
        )
        .catch(
            err => {
                alert(err.response.data.message)
                setDisabled(false)
            }
        )
    }

    return (
        <>
        <LogoContainer>
                <img src={Logo}/>
        </LogoContainer>

        <FormContainer>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled={disabled}/>
            <input placeholder="senha" onChange={(e)=>setPassword(e.target.value)} value={password} disabled={disabled}/>
            <button disabled={disabled} onClick={clickLogin}>
                {!disabled ? "Entrar" : <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />}
            </button>

        </FormContainer>

        <LinkContainer>
            <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LinkContainer>
        </>
    )
}