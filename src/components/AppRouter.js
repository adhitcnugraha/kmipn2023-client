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
import ContentResponse from "./Form/Product Forms/ContentResponse";
// Product Description
import ProductIdOne from "./Product Description/ProductIdOne";
import ProductIdTwo from "./Product Description/ProductIdTwo";
import ProductIdThree from "./Product Description/ProductIdThree";
import ProductIdFour from "./Product Description/ProductIdFour";
import ProductIdFive from "./Product Description/ProductIdFive";
import ProductIdSix from "./Product Description/ProductIdSix";
import ProductIdSeven from "./Product Description/ProductIdSeven";
import ProductIdEight from "./Product Description/ProductIdEight";
// Payment Page
import PaymentPage from "./Payment/PaymentPage";
import PaymentInfo from "./Payment/PaymentInfo";

const products = [
  { id: 1, component: <ProductIdOne /> },
  { id: 2, component: <ProductIdTwo /> },
  { id: 3, component: <ProductIdThree /> },
  { id: 4, component: <ProductIdFour /> },
  { id: 5, component: <ProductIdFive /> },
  { id: 6, component: <ProductIdSix /> },
  { id: 7, component: <ProductIdSeven /> },
  { id: 8, component: <ProductIdEight /> },
];

const AppRouter = ({ totalAmount, quantity }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/dashboard/*" element={<Homepage />} />
        <Route path="/client/login" element={<LoginUser />} />
        <Route path="/client/register" element={<RegisterUser />} />
        <Route path="/client/seller/*" element={<SellerRoutes />} />

        {/* Product Description Route */}
        {products.map((product) => (
          <Route
            key={product.id}
            path={`/client/product/${product.id}`}
            element={product.component}
          />
        ))}
        <Route
          path="/client/payment-confirmation/*"
          element={<PaymentInfo />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterSeller />} />
      <Route path="/login" element={<LoginSeller />} />
      <Route path="/form/1" element={<SellerFormStep />} />
      <Route path="/form/2" element={<SellerFormStepTwo />} />
      <Route path="/form/3" element={<SellerFormStepThree />} />
      <Route path="/addproduct/*" element={<AddProductRoutes />} />
      <Route path="/payment" element={<PaymentPage />} />
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
      <Route path="/5" element={<ContentResponse />} />
    </Routes>
  );
};

export default AppRouter;
