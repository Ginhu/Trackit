import {CardDays} from "../HabistStyled"

export default function WeekdaysSelected({letter, isSelected}) {
    return (
    <CardDays isSelected={isSelected}>{letter}</CardDays>
)}
