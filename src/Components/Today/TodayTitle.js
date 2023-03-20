import {TitleContainer} from "./TodayStyled"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export default function TodayTitle({todayTasksDone, todayTasksCounter}) {

    let now = dayjs().locale('pt-br').format('dddd, DD/MM')

    return (
        <TitleContainer todayTasksDone={todayTasksDone}>
            <p>{now.charAt(0).toUpperCase()+now.slice(1)}</p>
            {todayTasksDone === 0 ? <span>Nenhum hábito concluído ainda</span> : <span>{((todayTasksDone/todayTasksCounter)*100).toFixed(1)}% dos hábitos concluídos</span>}
        </TitleContainer>
    )
}