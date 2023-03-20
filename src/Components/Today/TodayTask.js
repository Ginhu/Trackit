import { TaskContainer, TaskTitle, TaskCheckContainer } from "./TodayStyled"
import Icon from "../../assets/checkicon.png"
import { useEffect, useState } from "react"
import axios from "axios"

export default function TodayTask({task ,header , setTodayTasksDone, todayTasksDone}) {

    const [statusTask, setStatusTask] = useState(task.done)
    const [highestSequenceStatus, setHighestSequenceStatus] = useState(false)
    const [disabled, setDisabled] = useState(false)

    function taskHighest(data, data2) {
        if(data > 0 && data === data2) {
            setHighestSequenceStatus(true)
        } else {
            setHighestSequenceStatus(false)
        }
    }

    useEffect(()=>{
        taskHighest(task.highestSequence , task.currentSequence)
    },[task])
    

    function checkTask() {
        setDisabled(true)

        if(!statusTask) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${task.id}/check`, {}, header)
            .then(() =>{
                setStatusTask(!statusTask)    
                setTodayTasksDone(todayTasksDone+1)
                setDisabled(false)
            })
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${task.id}/uncheck`, {}, header)
            .then(()=>{
                setStatusTask(!statusTask)
                setTodayTasksDone(todayTasksDone-1)
                setDisabled(false)
            })
            .catch(err => {
                alert(err.response.data.message)
                setDisabled(false)
            })
        }
    }

    return (
        <TaskContainer taskComplete={task.done} taskHighest={highestSequenceStatus} data-test="today-habit-container">
            <TaskTitle>
                <p data-test="today-habit-name">{task.name}</p>
                <h3 data-test="today-habit-sequence">Sequência atual:<span> {task.currentSequence} dias </span></h3> <h2 data-test="today-habit-record">Seu recorde: <span>{task.highestSequence} dias</span></h2>
            </TaskTitle>
            <TaskCheckContainer statusTask={statusTask} onClick={checkTask} disabled={disabled} data-test="today-habit-check-btn">
                <img src={Icon}/>
            </TaskCheckContainer>
        </TaskContainer>
    )
}