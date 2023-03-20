import {ButtonDays} from "../HabistStyled"

export default function WeekDaysButton({letter, clickDay, isSelected, disabled}) {
    return (
    <ButtonDays disabled={disabled} onClick={clickDay} isSelected={isSelected} data-test="habit-day">{letter}</ButtonDays>
)}
