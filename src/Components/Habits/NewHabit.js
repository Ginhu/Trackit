import { NewHabitContainer } from "./HabistStyled"

export default function NewHabit() {
    return (
        <>
            <NewHabitContainer>
                <input/>
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>
                <span>
                    <p>Cancelar</p>
                    <button>Salvar</button>
                </span>
            </NewHabitContainer>
        </>
    )
}
