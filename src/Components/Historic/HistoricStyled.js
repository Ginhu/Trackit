import styled from "styled-components";

export const HistoricContainer = styled.div`
     width: 100vw;
    height: calc(100vh - 140px);

    background: #E5E5E5;

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin: 25px 15px;
    }

    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left: 15px;
    }
`