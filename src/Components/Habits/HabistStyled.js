import styled from "styled-components";

export const HabitsContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 140px);

    background: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 70px;
    left: 0;

`

export const HabistContentContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 85vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 15px;

        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        button {
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            border: inherit;
            
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            color: #ffffff;
        }
    }

    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
        margin: 10px 25px 0;

        button {
            width: 84px;
        }
    }
`

export const NewHabitContainer = styled.div`
    width: 85vw;
    height: auto;

    background: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;


    input {
        width: 90%;
        height: 45px;
        margin-top: 15px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    div {
        display: flex;
        justify-content: flex-start;
        padding-left: 35px;
        margin: 10px 0 5px ;

        button {
            width: 30px;
            height: 30px;
            background: inherit;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-right: 5px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }

    span {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 25px 15px 0;

        button {
            width: 85px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
        }

        p {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
            padding-right: 25px;
        }
    }
`

export const NewHabitAddedContainer = styled.div`
    width: 85vw;
    height: auto;

    background: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        width: 88%;
        display: flex;
        justify-content: space-between;
        
        img {
            width: 13px;
            height: 15px;
        }
    }

    div {
        display: flex;
        justify-content: flex-start;
        padding-left: 35px;
        margin: 10px 0 5px ;

        button {
            width: 30px;
            height: 30px;
            background: inherit;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-right: 5px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }

`