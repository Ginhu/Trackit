import {NewHabitWeekdayButtonsContainer} from "../HabistStyled"
import WeekDaysButton from "./WeekDaysButton"

export default function NewHabitWeekdayButtons({refArray, clickDay, weekdaysArray, disabled}) {
    return (
        <NewHabitWeekdayButtonsContainer>
            {refArray.map((el)=> <WeekDaysButton 
                key={el.day} 
                id={el.day}
                letter={el.letter}
                clickDay={()=>clickDay(el)}
                isSelected={weekdaysArray.some((s)=> s === el.day)}
                disabled={disabled}
                data-test="habit-day"
            />)}                        
        </NewHabitWeekdayButtonsContainer>
    )
}