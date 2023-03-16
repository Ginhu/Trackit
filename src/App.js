import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage"
import RegisterPage from "./Components/RegisterPage/RegisterPage"
import TopFixed from "./Components/FixedComponents/Top";
import MenuFixed from "./Components/FixedComponents/Menu";
import HabitsPage from "./Components/Habits/HabitsPage"

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/cadastro" element={<RegisterPage/>} />
      <Route path="/habitos" element={<HabitsPage image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>}/>
      <Route path="/top" element={<TopFixed image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>} />
      <Route path="/menu" element={<MenuFixed/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
