import {LogoContainer, FormContainer, LinkContainer} from "../LoginPage/LoginStyled"
import Logo from "../../assets/logo-completa.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function RegisterPage ({email, setEmail, password, setPassword}) {

    const [userName, setUserName] = useState("")
    const [userImage, setUserImage] = useState("")
    const navigate = useNavigate();

    function clickRegister() {
        const body = {email: email, name: userName, image: userImage, password: password}
        console.log(body)
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        .then(res => {
            console.log(navigate("/"))
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    return (
        <>
        <LogoContainer>
            <Link to="/">
            <img src={Logo}></img>
            </Link>
        </LogoContainer>

        <FormContainer>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input placeholder="senha" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <input placeholder="nome" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            <input placeholder="foto" onChange={(e)=> setUserImage(e.target.value)} value={userImage}/>
            <button onClick={clickRegister}>Entrar</button>

        </FormContainer>

        <LinkContainer>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LinkContainer>
        </>
    )
}