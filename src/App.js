import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Components/LoginPage/LoginPage"
import RegisterPage from "./Components/RegisterPage/RegisterPage"
import HabitsPage from "./Components/Habits/HabitsPage"
import TodayPage from "./Components/Today/TodayPage"
import HistoricPage from "./Components/Historic/HistoricPage"
import { useState } from "react"
import { UserContext } from "./UserContext"

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [header, setHeader] = useState(null)
  const [todayTasksCounter, setTodayTasksCounter] = useState(0)
  const [todayTasksDone, setTodayTasksDone] = useState(0)
  const [image, setImage] = useState(null)
    

  return (
    <BrowserRouter>
    <UserContext.Provider value={{header, setHeader}}>
    <Routes>
      
          <Route path="/" element={<LoginPage setImage={setImage} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
          <Route path="/cadastro" element={<RegisterPage email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
          <Route path="/habitos" element={<HabitsPage todayTasksCounter={todayTasksCounter} todayTasksDone={todayTasksDone}
          image={image}/>}/>
          <Route path="/hoje" element={<TodayPage todayTasksDone={todayTasksDone} setTodayTasksDone={setTodayTasksDone}  
          todayTasksCounter={todayTasksCounter} setTodayTasksCounter={setTodayTasksCounter} 
          image={image}/>}/> 
          <Route path="/historico" element={<HistoricPage todayTasksDone={todayTasksDone} todayTasksCounter={todayTasksCounter}
          image={image}/>}/>
        
    </Routes>
    </UserContext.Provider>

    </BrowserRouter>
  );
}

export default App;
