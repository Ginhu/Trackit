import TopFixed from "../FixedComponents/Top"
import MenuFixed from "../FixedComponents/Menu"
import { TodayContainer } from "./TodayStyled"
import TodayTitle from "./TodayTitle"
import TodayTask from "./TodayTask"
import { useContext, useEffect } from "react"
import { UserContext } from "../../UserContext"

export default function TodayPage({image}) {

    const { header } = useContext(UserContext)

    useEffect(()=>{
        console.log(header)
    }, [])

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