import {HabistTitleContainer} from "./HabistStyled"

export default function HabitsTitle({clicado}) {
    return (
        <HabistTitleContainer>
            <span>Meus hábitos</span>
            <button onClick={clicado} data-test="habit-create-btn">+</button>
        </HabistTitleContainer>
    )
}