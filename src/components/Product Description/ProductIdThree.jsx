import React, { useState } from "react";
import Navbar from "./Navbar";
import GKunci from "../../assets/GKunci.jpg";
import PaymentPage from "../Payment/PaymentPage";

const ProductIdThree = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-start p-10">
        <img
          src={GKunci}
          alt="gantungan kunci"
          className="w-80 h-80 rounded-2xl border-4 border-gray-300 mr-10"
        />
        <div className="flex font-poppins flex-col">
          <h2 className="text-4xl font-bold mb-4">Gantungan Kunci</h2>
          <p className="text-xl text-gray-600 mb-4">IDR 50,000</p>
          <div className="text-gray-600 mb-4 mr-5 flex items-center">
            {/* Wrap buttons inside a div with flex and items-center class */}
            <span className="mr-3">Quantity</span>
            <button
              onClick={handleDecrement}
              className="border rounded-md px-2 py-1 focus:outline-none"
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="border rounded-md px-2 py-1 focus:outline-none"
            >
              +
            </button>
          </div>
          <p className="text-gray-600">Category: Kain</p>

          {/* Cart and Buy Buttons */}
          <div className="flex mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none">
              Add to Cart
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 mr-2 rounded-md hover:bg-red-600 focus:outline-none">
              Favorite
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Buy Now
            </button>
            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-5 text-center">
                    Payment Confirmation
                  </h2>
                  <p className="mb-4">
                    Please confirm your purchase for the "Gantungan Kunci"
                    product with a quantity of {quantity}.
                  </p>
                  <PaymentPage
                    totalAmount={quantity * 50000}
                    quantity={quantity}
                    handleCloseModal={handleCloseModal}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section for Specifications and Description */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Specifications:</h3>
            <ul className="list-disc pl-6">
              <li>Material: Jeans</li>
              <li>Color: Blue</li>
              <li>Size: 15 x 10 cm</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Description:</h3>
            <p>
              Introducing our Jeans Keychain Holder, a unique and stylish
              accessory crafted from upcycled denim jeans. This keychain holder
              not only adds a touch of fashion-forward flair to your daily
              essentials but also promotes sustainable practices by giving old
              jeans a new purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdThree;
