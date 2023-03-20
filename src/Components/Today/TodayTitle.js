import {TitleContainer} from "./TodayStyled"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export default function TodayTitle({todayTasksDone, todayTasksCounter}) {

    let now = dayjs().locale('pt-br').format('dddd, DD/MM')

    return (
        <TitleContainer todayTasksDone={todayTasksDone}>
            <p data-test="today">{now.charAt(0).toUpperCase()+now.slice(1)}</p>
            {todayTasksDone === 0 ? <span data-test="today-counter">Nenhum hábito concluído ainda</span> : <span data-test="today-counter">{((todayTasksDone/todayTasksCounter)*100).toFixed(1)}% dos hábitos concluídos</span>}
        </TitleContainer>
    )
}