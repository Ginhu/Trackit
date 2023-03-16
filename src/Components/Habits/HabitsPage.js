import MenuFixed from "../FixedComponents/Menu"
import TopFixed from "../FixedComponents/Top"
import {HabitsContainer} from "./HabistStyled"
import HabitsContent from "./HabitsContent"

export default function HabitsPage({image}) {
    return (
        <>  
            <TopFixed image={image}/>

            <HabitsContainer>  
                <HabitsContent/>                
            </HabitsContainer>
            
            <MenuFixed/>
        </>
    )
}