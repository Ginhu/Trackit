import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Components/LoginPage/LoginPage"
import RegisterPage from "./Components/RegisterPage/RegisterPage"
import HabitsPage from "./Components/Habits/HabitsPage"
import TodayPage from "./Components/Today/TodayPage"
import HistoricPage from "./Components/Historic/HistoricPage"

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/cadastro" element={<RegisterPage/>} />
      <Route path="/habitos" element={<HabitsPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/>
      <Route path="/hoje" element={<TodayPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/> 
      <Route path="/historico" element={<HistoricPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
