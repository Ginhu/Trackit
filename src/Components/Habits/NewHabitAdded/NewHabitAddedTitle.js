import { useContext } from "react"
import { UserContext } from "../../../UserContext"
import {NewHabitAddedTitleContainer} from "../HabistStyled"
import axios from "axios"

export default function NewHabitAddedTitle({icone, el}) {
    
    const {header} = useContext(UserContext)

    function deleteHabit(id) {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, header)
        .then()
        .catch(err=>console.log(err.response.data.mensagem))
    }
    return (
        <NewHabitAddedTitleContainer>
            <span data-test="habit-name" >{el.name}</span>
            <img src={icone} onClick={()=>{ if(window.confirm("Delete this habit?")){deleteHabit(el.id)}}} data-test="habit-delete-btn"/>                
        </NewHabitAddedTitleContainer>
    )
}