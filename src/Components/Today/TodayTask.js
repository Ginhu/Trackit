import { TaskContainer, TaskTitle, TaskCheckContainer } from "./TodayStyled"
import Icon from "../../assets/checkicon.png"
import { useEffect, useState } from "react"
import axios from "axios"

export default function TodayTask({task ,header , setTodayTasksDone, todayTasksDone}) {

    const [statusTask, setStatusTask] = useState(task.done)
    const [highestSequenceStatus, setHighestSequenceStatus] = useState(false)

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
        if(!statusTask) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${task.id}/check`, {}, header)
            .then((res) =>{
                setStatusTask(!statusTask)    
                setTodayTasksDone(todayTasksDone+1)
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${task.id}/uncheck`, {}, header)
            .then((res)=>{
                setStatusTask(!statusTask)
                setTodayTasksDone(todayTasksDone-1)
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }
    }

    return (
        <TaskContainer onClick={checkTask} taskComplete={task.done} taskHighest={highestSequenceStatus}>
            <TaskTitle>
                <p>{task.name}</p>
                <h3>Sequência atual:<span> {task.currentSequence} dias </span></h3> <h2>Seu recorde: <span>{task.highestSequence} dias</span></h2>
            </TaskTitle>
            <TaskCheckContainer statusTask={statusTask}>
                <img src={Icon}/>
            </TaskCheckContainer>
        </TaskContainer>
    )
}