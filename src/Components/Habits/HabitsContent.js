import { useState } from "react"
import {HabistContentContainer} from "./HabistStyled"
import NewHabit from "./NewHabit"
import NewHabitAdded from "./NewHabitAdded"
 
 export default function HabitsContent() {
    const [texto, setTexto] = useState(<span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)
    const [novo, setNovo] = useState(<NewHabit />)
    function clicado () {
        setTexto("");
        setNovo("")
    }
    return (
        <HabistContentContainer>
            <div>
                <p>Meus hábitos</p>
                <button onClick={clicado}>+</button>
            </div>
            {novo}
            {texto}

            <NewHabitAdded/>
        </HabistContentContainer>    
    )
 }
 
    