import styled from "styled-components"
import { Link } from "react-router-dom";

export default function TopFixed({image}) {
    return (
        
        <Top>
            <span>TrackIt</span>
            <img src={image}></img>
        </Top>
        
    )
}

const Top = styled.div`
    width: 100vw;
    height: 70px;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    

    span {
        font-family: 'Playball';
        color: #ffffff;
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        margin-left: 25px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 25px;
    }
`