import React, { useState } from "react";
import Navbar from "./Navbar";
import ToteBag from "../../assets/Tote.jpg";

const ProductIdOne = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-start p-10">
        <img
          src={ToteBag}
          alt="totebag"
          className="w-80 h-80 rounded-2xl border-4 border-gray-300 mr-10"
        />
        <div className="flex font-poppins flex-col">
          <h2 className="text-4xl font-bold mb-4">Totebag</h2>
          <p className="text-xl text-gray-600 mb-4">IDR 90,000</p>
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
          <p className="text-gray-600">Category: Olahan Sampah Anorganik</p>

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
                    Please confirm your purchase for the "Totebag" product with
                    a quantity of {quantity}.
                  </p>
                  <p className="mb-4">Total Amount: IDR {quantity * 90000}</p>

                  {/* Buttons for Confirming and Closing the Modal */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleCloseModal}
                      className="bg-red-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-600 focus:outline-none"
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
                      // Implement your logic for payment processing here (e.g., redirect to payment gateway)
                    >
                      Confirm Payment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section for Specifications and Description */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Specifications:</h3>
            <ul className="list-disc pl-6">
              <li>Material: Plastic</li>
              <li>Color: Transparent, Blue</li>
              <li>Size: 15 x 14 x 4 inches</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Description:</h3>
            <p>
              Our Eco-Friendly Tote Bag, crafted from recycled plastic bottles,
              is the perfect companion for your everyday activities. This
              sustainable tote combines functionality with environmental
              consciousness, offering a guilt-free and stylish way to carry your
              belongings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdOne;
