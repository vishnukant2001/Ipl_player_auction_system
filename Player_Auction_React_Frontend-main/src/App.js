import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminLogin from "./Pages/AdminLogin";
import PlayerRegister from "./Pages/PlayerRegister";
import TeamRegister from "./Pages/TeamRegister"
import TeamLogin from "./Pages/TeamLogin";
import DashboardPage from "./Pages/DashboardPage";
import AdminPage from "./Pages/AdminPage";
import "./App.css";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/player" element={<PlayerRegister />} />
        <Route path="/team" element={<TeamRegister />} />
        <Route path="/team/login" element={<TeamLogin />} />
        <Route path="/admin/page" element={<AdminPage />} />
        <Route path="/dashboard/:user/:name?/" element={<DashboardPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
