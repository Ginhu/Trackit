import TopFixed from "../FixedComponents/Top"
import MenuFixed from "../FixedComponents/Menu"
import { TodayContainer } from "./TodayStyled"
import TodayTitle from "./TodayTitle"
import TodayTask from "./TodayTask"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
import axios from "axios"

export default function TodayPage({image, setTodayTasksCounter, todayTasksCounter, setTodayTasksDone, todayTasksDone}) {

    const { header } = useContext(UserContext)
    const [todayTasks, setTodayTasks] = useState([])
    

    useEffect(()=>{
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", header)
        .then(res=>{setTodayTasks(res.data)
            setTodayTasksCounter(res.data.length) 
            if(res.data.length === 0) {
                setTodayTasksDone(0)
            }
            })
        .catch(err=>console.log(err.response.data.message))
    }, [todayTasksDone])

    


    return (
        <>
        <TopFixed image={image} />
            <TodayContainer>
                <TodayTitle todayTasksDone={todayTasksDone} todayTasksCounter={todayTasksCounter}/>
                {todayTasks.map((el)=> <TodayTask key={el.id} header={header} task={el} setTodayTasksDone={setTodayTasksDone} todayTasksDone={todayTasksDone}/>)}
            </TodayContainer>
        <MenuFixed todayTasksCounter={todayTasksCounter} todayTasksDone={todayTasksDone}/>
        </>
    )
}