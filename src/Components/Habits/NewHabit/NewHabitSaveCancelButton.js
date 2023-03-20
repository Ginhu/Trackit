import {NewHabitSaveCancelButtonContainer} from "../HabistStyled"
import { ThreeDots } from "react-loader-spinner"

export default function NewHabitSaveCancelButton({showNew, setShowNew, clickSave, disabled}) {
    return (
        <NewHabitSaveCancelButtonContainer>
            <button disabled={disabled} onClick={()=>setShowNew(!showNew)} data-test="habit-create-cancel-btn">Cancelar</button>
            <span disabled={disabled} onClick={clickSave} data-test="habit-create-save-btn">
                {!disabled ? "Salvar" : <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />}</span>
        </NewHabitSaveCancelButtonContainer>
    )
}