import "./assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Main Page/Homepage";
import LoginUser from "./components/Auth/LoginUser";
import RegisterUser from "./components/Auth/RegisterUser";
import LandingPage from "./components/Main Page/LandingPage";
import RegisterSeller from "./components/Auth/RegisterSeller";
import SellerForm from "./components/Form/SellerForm";
import LoginSeller from "./components/Auth/LoginSeller";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/dashboard" element={<Homepage />} />
        <Route path="/client/login" element={<LoginUser />} />
        <Route path="/client/register" element={<RegisterUser />} />
        <Route path="/client/seller/register" element={<RegisterSeller />} />
        <Route path="/client/seller/login" element={<LoginSeller />} />
        <Route path="/client/seller/form" element={<SellerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
