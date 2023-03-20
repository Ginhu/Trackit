import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function MenuFixed({todayTasksCounter, todayTasksDone}) {

    const percentage = ((todayTasksDone/todayTasksCounter)*100).toFixed(1)

    return (
        <Menu>
            <Link to="/habitos">
                <button>Hábitos</button>
            </Link>

            <Link to="/hoje">
                <div>
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
                </div>
            </Link>
            
            <Link to="/historico">
                <button>Histórico</button>
            </Link>
        </Menu>
    )
}

const Menu = styled.div`
    width: 100vw;
    height: 70px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    button {
        background: none;
        color: #52B6FF;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        margin: 0 25px;
    }

    div {
        width: 120px;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
`