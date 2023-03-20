import {ButtonDays} from "../HabistStyled"

export default function WeekDaysButton({letter, clickDay, isSelected}) {
    return (
    <ButtonDays onClick={clickDay} isSelected={isSelected} data-test="habit-day">{letter}</ButtonDays>
)}
