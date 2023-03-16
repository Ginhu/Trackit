import {NewHabitAddedContainer} from "./HabistStyled"
import Icone from "../../assets/Vector.png"

export default function NewHabitAdded() {
    return (
        <NewHabitAddedContainer>
            <span>
                <p>lorem ipsum</p>
                <img src={Icone}/>                
            </span>
            <div>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </div>
        </NewHabitAddedContainer>
    )
}