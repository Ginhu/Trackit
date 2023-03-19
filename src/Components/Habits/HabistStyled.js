import styled from "styled-components";

export const HabitsContainer = styled.div`
    width: 100vw;
    box-sizing:border-box;
    background: #E5E5E5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 70px;
    left: 0;
    bottom: -100px;
    right: 0;

`

export const HabistContentContainer = styled.div`
    width: 100vw;
    height: 82vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top:0px;
    overflow-y: scroll;
    
    p {
        width: 85vw;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
        margin: 10px 25px 0;
    }
`

export const HabistTitleContainer = styled.div`
        width: 85vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 15px;

        span {
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
`

export const NewHabitContainer = styled.div`
    width: 85vw;

    background: #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    input {
        width: 90%;
        height: 45px;
        margin-top: 15px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
`

export const NewHabitWeekdayButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 35px;
    margin: 10px 0 5px;

`

export const NewHabitSaveCancelButtonContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 25px 15px 0;

        button {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
            padding-right: 15px;

            display: flex;
            justify-content: center;
            align-items: center;

            background: none;
            border: none;
            cursor: pointer;
            outline: inherit;
        }

        span {
            width: 85px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            color: #FFFFFF;

            display: flex;
            justify-content: center;
            align-items: center;
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
    margin: 5px 0;
    
`

export const NewHabitAddedTitleContainer = styled.div`
        width: 80vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px 0;

        span {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }
        
        img {
            width: 13px;
            height: 15px;
        }
`

export const NewHabitAddedWeekdaysContainer = styled.div`
        width: 80vw;
        display: flex;
        justify-content: flex-start;
        margin: 10px 0 15px ;
`

export const ButtonDays = styled.button`
    width: 30px;
    height: 30px;
    background: ${props=>props.isSelected ? "#CFCFCF" : "#ffffff"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props=> props.isSelected ? "#ffffff" : "#cccccc"};
`

export const CardDays = styled.button`
    width: 30px;
    height: 30px;
    background: ${props=>props.isSelected ? "#CFCFCF" : "#ffffff"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props=> props.isSelected ? "#ffffff" : "#cccccc"};
`

export const Overflow = styled.div`
    width: 100%;
    background: #cccccc;
    margin-top: 60px;
`