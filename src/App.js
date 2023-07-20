import "./assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Main Page/Homepage";
import LoginUser from "./components/Auth/LoginUser";
import RegisterUser from "./components/Auth/RegisterUser";
import LandingPage from "./components/Main Page/LandingPage";
import RegisterSeller from "./components/Auth/RegisterSeller";
import LoginSeller from "./components/Auth/LoginSeller";
import SellerFormStep from "./components/Form/Seller Forms/SellerFormStep";
import SellerFormStepTwo from "./components/Form/Seller Forms/SellerFormStepTwo";
import SellerFormStepThree from "./components/Form/Seller Forms/SellerFormStepThree";

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
        <Route path="/client/seller/form/1" element={<SellerFormStep />} />
        <Route path="/client/seller/form/2" element={<SellerFormStepTwo />} />
        <Route path="/client/seller/form/3" element={<SellerFormStepThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
