import TopFixed from "../FixedComponents/Top"
import MenuFixed from "../FixedComponents/Menu"
import { TodayContainer } from "./TodayStyled"
import TodayTitle from "./TodayTitle"
import TodayTask from "./TodayTask"

export default function TodayPage({image}) {
    return (
        <>
        <TopFixed image={image}/>
            <TodayContainer>
                <TodayTitle/>
                <TodayTask/>
                <TodayTask/>
            </TodayContainer>
        <MenuFixed/>
        </>
    )
}