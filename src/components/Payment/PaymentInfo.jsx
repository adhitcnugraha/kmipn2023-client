import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Main Page/Navbar";

const PaymentInfo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = queryParams.get("quantity");
  const totalAmount = queryParams.get("totalAmount");
  const orderDate = queryParams.get("orderDate");

  return (
    <div>
      <Navbar />

      <div className=" font-poppins bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-4xl font-bold text-center mb-4">
          Payment Successful!
        </h2>
        <p className="mb-4 text-center ">Thank you for your purchase.</p>
        <p className="mb-10 text-center">
          You have successfully purchased {quantity} product(s) with a total
          amount of IDR {totalAmount}.
        </p>
        <p className="text-center">Order Date: {orderDate}</p>
        {/* You can add more information or order details here */}
        {/* Add the button for redirecting to /client/dashboard */}
        <div className="flex justify-center mt-6">
          <Link
            to="/client/dashboard"
            className="bg-green-500 text-white py-2 px-4  hover:bg-green-600 rounded-2xl focus:outline-none"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
