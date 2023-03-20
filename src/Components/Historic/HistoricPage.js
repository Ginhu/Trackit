import { HistoricContainer } from "./HistoricStyled"
import TopFixed from "../FixedComponents/Top"
import MenuFixed from "../FixedComponents/Menu"

export default function HistoricPage({image, todayTasksCounter, todayTasksDone}) {
    return (
        <>
        <TopFixed image={image}/>
        <HistoricContainer>
            <p>Histórico</p>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </HistoricContainer>
        <MenuFixed todayTasksCounter={todayTasksCounter} todayTasksDone={todayTasksDone}/>
        </>
    )
}