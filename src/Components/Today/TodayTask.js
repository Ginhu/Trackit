import {TaskContainer} from "./TodayStyled"
import Icon from "../../assets/check.png"

export default function TodayTask() {
    return (
        <TaskContainer>
            <div>
                <p>Ler 1 capítulo de livro</p>
                <span>Sequência atual: 3 dias <br/>Seu recorde: 5 dias</span>
            </div>
            <img src={Icon}/>
        </TaskContainer>
    )
}