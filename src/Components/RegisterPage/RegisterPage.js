import {LogoContainer, FormContainer, LinkContainer} from "../LoginPage/LoginStyled"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function RegisterPage ({email, setEmail, password, setPassword}) {

    const [userName, setUserName] = useState("")
    const [userImage, setUserImage] = useState("")
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

    function clickRegister() {
        const body = {email: email, name: userName, image: userImage, password: password}
        console.log(body)
        setDisabled(true);
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        .then(res => {
            console.log(navigate("/"))
        })
        .catch(err => {
            alert(err.response.data.message)
            setDisabled(false)
        })
    }

    return (
        <>
        <LogoContainer>
            <Link to="/">
            <img src={Logo}/>
            </Link>
        </LogoContainer>

        <FormContainer>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled={disabled} data-test="email-input"/>
            <input placeholder="senha" onChange={(e)=>setPassword(e.target.value)} value={password} disabled={disabled} data-test="password-input"/>
            <input placeholder="nome" onChange={(e)=>setUserName(e.target.value)} value={userName} disabled={disabled} data-test="user-name-input"/>
            <input placeholder="foto" onChange={(e)=> setUserImage(e.target.value)} value={userImage} disabled={disabled} data-test="user-image-input"/>
            <button onClick={clickRegister} disabled={disabled} data-test="signup-btn">Cadastrar</button>

        </FormContainer>

        <LinkContainer >
            <Link to="/" data-test="login-link">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LinkContainer>
        </>
    )
}