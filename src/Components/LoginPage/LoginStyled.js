import styled from "styled-components"

export const LogoContainer = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    margin-top: 15vh;

    img {
        width: 180px;
        height: auto;
    }
`

export const FormContainer = styled.div`
    width: 100vw;
    height: 30vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    input {
        padding: 0;
        width: 300px;
        height: 45px;
        margin-top: 10px;
        box-sizing: border-box;

        &::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color:#dbdbdb;
            padding-left: 11px;
        }
    }

    button {
        width: 300px;
        height: 45px;
        background: #52b6ff;
        color: #ffffff;
        margin-top: 10px;
        border-radius: 5px;

        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
	    outline: inherit;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
`

export const LinkContainer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    a {
        color:#52B6FF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
    }
`