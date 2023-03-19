import { useContext, useState } from "react"
import { NewHabitContainer } from "../HabistStyled"
import NewHabitWeekdayButtons from "./NewHabitWeekdayButton"
import NewHabitSaveCancelButton from "./NewHabitSaveCancelButton"
import { UserContext } from "../../../UserContext"
import axios from "axios"

export default function NewHabit({showNew, setShowNew, weekdaysArray, setWeekdaysArray, newHabitName, setNewHabitName}) {

    const {header} = useContext(UserContext)
    const refArray = [{day: 0, letter: "D"}, {day: 1, letter: "S"}, {day: 2, letter: "T"}, {day: 3, letter: "Q"}, {day: 4, letter: "Q"}, {day: 5, letter: "S"}, {day: 6, letter: "S"}]
    const [disabled, setDisabled] = useState(false)

    function clickDay(el) {
        const isSelected = weekdaysArray.some((s)=> s === el.day)

        if(isSelected) {
            const newList = weekdaysArray.filter((s)=> s !== el.day)
            setWeekdaysArray(newList)
        } else {
            setWeekdaysArray([...weekdaysArray, el.day])
        }
    }

    function clickSave() {
        const body = {name: newHabitName, days: weekdaysArray}

        if(weekdaysArray.length === 0 || newHabitName === "") {
            alert('Precisa selecionar os dias do hábito e preencher seu nome!')
        } else {
            setDisabled(true)
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, header)
            .then(res=>{
                setDisabled(false)
                setShowNew(false)
            })
            .catch(err=>{
                setDisabled(false)
                alert(err.response.data.message)})
            
            setNewHabitName("")
            setWeekdaysArray([])
        }
        
    }

    return (
            <NewHabitContainer>
                <input placeholder="nome do hábito" disabled={disabled} onChange={(e)=>setNewHabitName(e.target.value)} value={newHabitName}/>
                <NewHabitWeekdayButtons disabled={disabled} refArray={refArray} clickDay={clickDay} weekdaysArray={weekdaysArray}/>
                <NewHabitSaveCancelButton disabled={disabled} setShowNew={setShowNew} showNew={showNew} clickSave={clickSave}/>
            </NewHabitContainer>
        
    )
}
