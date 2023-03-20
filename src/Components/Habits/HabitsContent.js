import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
import {HabistContentContainer, Overflow} from "./HabistStyled"
import NewHabit from "./NewHabit/NewHabit"
import NewHabitAdded from "./NewHabitAdded/NewHabitAdded"
import HabitsTitle from "./HabitsTitle"
 
 export default function HabitsContent() {

    const texto = (<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
    const [showNew, setShowNew] = useState(false)
    const [habitsArray, setHabistArray] = useState([])
    const {header} = useContext(UserContext)
    const [weekdaysArray, setWeekdaysArray] = useState([])
    const [newHabitName, setNewHabitName] = useState("")

    useEffect(()=>{
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" ,header)
        .then(res=>{
            setHabistArray(res.data)
        })
        .catch(err=>alert(err.response.data))
    }, [habitsArray])

    function clicado () {
        setShowNew(!showNew)
    }

    return (
        <HabistContentContainer>
            <HabitsTitle clicado={clicado}/>
                
            {showNew && <NewHabit showNew={showNew} setShowNew={setShowNew} 
            weekdaysArray={weekdaysArray} setWeekdaysArray={setWeekdaysArray}
            newHabitName={newHabitName} setNewHabitName={setNewHabitName}
            />}
            {habitsArray.length === 0 ? texto : ""}

            {habitsArray.map((el)=> <NewHabitAdded key={el.id} el={el}/>)}
            <Overflow/>
        </HabistContentContainer>    
    )
 }
 
    