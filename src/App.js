import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Main Page/Homepage";
import LoginUser from "./components/Auth/LoginUser";
import RegisterUser from "./components/Auth/RegisterUser";
import LandingPage from "./components/Main Page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/dashboard" element={<Homepage />} />
        <Route path="/client/login" element={<LoginUser />} />
        <Route path="/client/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
