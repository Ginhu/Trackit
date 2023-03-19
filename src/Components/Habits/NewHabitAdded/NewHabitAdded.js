import {NewHabitAddedContainer} from "../HabistStyled"
import Icone from "../../../assets/Vector.png"
import NewHabitAddedTitle from "./NewHabitAddedTitle"
import NewHabitAddedWeekdays from "./NewHabitAddedWeekdays"

export default function NewHabitAdded({el}) {
    return (
        <NewHabitAddedContainer>
            <NewHabitAddedTitle icone={Icone} el={el}/>
            <NewHabitAddedWeekdays el={el}/>
        </NewHabitAddedContainer>
    )
}