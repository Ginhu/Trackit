import styled from "styled-components";

export const TodayContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 140px);

    background: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 70px;
    left: 0;

`

export const TitleContainer = styled.div`
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column;
    padding: 25px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`

export const TaskContainer = styled.div`
    width: 85%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    div {
        padding-left: 15px;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;        
        color: #666666;
        margin-bottom: 10px;
    }

    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }

    img{ 
        width: 100px;
    }
`