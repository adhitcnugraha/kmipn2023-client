import { BrowserRouter, Route, Routes } from "react-router-dom";
// Main Page
import LandingPage from "./Main Page/LandingPage";
import Homepage from "./Main Page/Homepage";
// Auth
import LoginUser from "./Auth/LoginUser";
import RegisterUser from "./Auth/RegisterUser";
import RegisterSeller from "./Auth/RegisterSeller";
import LoginSeller from "./Auth/LoginSeller";
// Seller Form
import SellerFormStep from "./Form/Seller Forms/SellerFormStep";
import SellerFormStepTwo from "./Form/Seller Forms/SellerFormStepTwo";
import SellerFormStepThree from "./Form/Seller Forms/SellerFormStepThree";
// Product Form
import MainContent from "./Form/Product Forms/MainContent";
import MainContentTwo from "./Form/Product Forms/MainContentTwo";
import MainContentThree from "./Form/Product Forms/MainContentThree";
import MainContentFour from "./Form/Product Forms/MainContentFour";
// Product Description
import ProductIdOne from "./Product Description/ProductIdOne";
import ProductIdTwo from "./Product Description/ProductIdTwo";
import ProductIdThree from "./Product Description/ProductIdThree";
import ProductIdFour from "./Product Description/ProductIdFour";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/dashboard/*" element={<Homepage />} />
        <Route path="/client/login" element={<LoginUser />} />
        <Route path="/client/register" element={<RegisterUser />} />
        <Route path="/client/seller/*" element={<SellerRoutes />} />
        {/* <Route
          path="/client/product/:productId"
          element={<ProductDescriptionsRoutes />}
        /> */}
        <Route path="/client/product/1" element={<ProductIdOne />} />
        <Route path="/client/product/2" element={<ProductIdTwo />} />
        <Route path="/client/product/3" element={<ProductIdThree />} />
        <Route path="/client/product/4" element={<ProductIdFour />} />
      </Routes>
    </BrowserRouter>
  );
};

// const ProductDescriptionsRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<ProductIdOne />} />
//       <Route path="/2" element={<ProductIdTwo />} />
//     </Routes>
//   );
// };

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterSeller />} />
      <Route path="/login" element={<LoginSeller />} />
      <Route path="/form/1" element={<SellerFormStep />} />
      <Route path="/form/2" element={<SellerFormStepTwo />} />
      <Route path="/form/3" element={<SellerFormStepThree />} />
      <Route path="/addproduct/*" element={<AddProductRoutes />} />
    </Routes>
  );
};

const AddProductRoutes = () => {
  return (
    <Routes>
      <Route path="/1" element={<MainContent />} />
      <Route path="/2" element={<MainContentTwo />} />
      <Route path="/3" element={<MainContentThree />} />
      <Route path="/4" element={<MainContentFour />} />
    </Routes>
  );
};

export default AppRouter;
