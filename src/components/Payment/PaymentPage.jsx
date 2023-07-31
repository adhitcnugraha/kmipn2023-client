import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ totalAmount, quantity }) => {
  const navigate = useNavigate();
  const orderDate = new Date().toLocaleString();
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Implement your payment processing logic here
    // For demonstration purposes, let's assume the payment is successful after a brief delay
    // Replace this with your actual payment processing logic
    setTimeout(() => {
      // Redirect to the payment confirmation page after successful payment
      navigate(
        `/client/payment-confirmation?]quantity=${quantity}&totalAmount=${totalAmount}&orderDate=${orderDate}`
      );
    }, 500);
  };

  const handleCancelPayment = () => {
    navigate("/client/dashboard");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Payment Confirmation
        </h2>
        <p className="mb-4">
          Please enter your payment details to complete the purchase for this
          product with a quantity of {quantity}.
        </p>
        <p className="mb-4">
          Total Amount:
          <strong className="font-bold text-lg ml-2">IDR {totalAmount}</strong>
        </p>

        {/* Payment Form */}
        <form onSubmit={handlePaymentSubmit}>
          {/* Include your payment form fields here (e.g., credit card number, expiration date, CVV, etc.) */}
          {/* Make sure to handle form input and validation based on your payment processing requirements */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-green-600 focus:outline-none"
            >
              Submit Payment
            </button>
            {/* Close Modal Button */}
            <button
              onClick={handleCancelPayment}
              className="bg-red-500 text-white py-2 px-4 rounded-md ml-4 hover:bg-red-600 focus:outline-none"
            >
              Cancel Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
