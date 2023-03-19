import { useState } from "react"
import {NewHabitAddedWeekdaysContainer, ButtonDays} from "../HabistStyled"
import WeekdaysSelected from "./WeekdaysSelected"

export default function NewHabitAddedWeekdays({el}) {

    const refArray = [{day: 0, letter: "D"}, {day: 1, letter: "S"}, {day: 2, letter: "T"}, {day: 3, letter: "Q"}, {day: 4, letter: "Q"}, {day: 5, letter: "S"}, {day: 6, letter: "S"}]
    const [isSelected, setIsSelected] = useState(el.days)

    return (
        <NewHabitAddedWeekdaysContainer>
            {refArray.map((elem)=> <WeekdaysSelected 
            key={elem.day}
            letter={elem.letter}
            isSelected={isSelected.some((s)=>s === elem.day)}
            />)}
        </NewHabitAddedWeekdaysContainer>
    )
}