import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ totalAmount, quantity, handleCloseModal }) => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const navigate = useNavigate(); // Get the history object from react-router-dom

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Implement your payment processing logic here
    // For demonstration purposes, let's assume the payment is successful after a brief delay
    // Replace this with your actual payment processing logic
    setIsPaymentSuccess(true);
    setTimeout(() => {
      handleCloseModal();
      alert("Payment successful!");
    }); // Close the modal after 2 seconds (adjust as needed)
  };

  // Redirect to Dashboard after payment success
  if (isPaymentSuccess) {
    setTimeout(() => {
      navigate("/client/dashboard");
    }, 1000);
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
        <p className="mb-4">
          Please enter your payment details to complete the purchase for this
          product with a quantity of {quantity}.
        </p>
        <p className="mb-4">Total Amount: IDR {totalAmount}</p>

        {/* Payment Form */}
        <form onSubmit={handlePaymentSubmit}>
          {/* Include your payment form fields here (e.g., credit card number, expiration date, CVV, etc.) */}
          {/* Make sure to handle form input and validation based on your payment processing requirements */}
          {/* For demonstration purposes, let's add a simple payment submit button */}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Submit Payment
          </button>
        </form>

        {/* Close Modal Button */}
        <button
          onClick={handleCloseModal}
          className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 focus:outline-none"
        >
          Cancel Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
