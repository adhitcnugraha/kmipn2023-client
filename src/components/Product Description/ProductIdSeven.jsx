import React, { useState } from "react";
import Navbar from "./Navbar";
import TasPopIce2 from "../../assets/TasPopIce2.jpg";
import PaymentPage from "../Payment/PaymentPage";

const ProductIdSix = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
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
          src={TasPopIce2}
          alt="tas pop ice 2"
          className="w-80 h-80 rounded-2xl border-4 border-gray-300 mr-10"
        />
        <div className="flex font-poppins flex-col">
          <h2 className="text-4xl font-bold mb-4">Tas Pop Ice</h2>
          <p className="text-xl text-gray-600 mb-4">IDR 150,000</p>
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
                    Please confirm your purchase for the "Tas Pop Ice" product
                    with a quantity of {quantity}.
                  </p>
                  <PaymentPage
                    totalAmount={quantity * 150000}
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
              <li>Material: Plastic</li>
              <li>Color: Green</li>
              <li>Size: 15 x 12 x 5 inch</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Description:</h3>
            <p>
              Our Pop Ice Branded Plastic Tote Bag is a stylish and eco-friendly
              accessory designed to suit your everyday needs. Crafted from
              high-quality recycled plastic from Pop Ice containers, this tote
              bag not only offers practicality but also contributes to reducing
              plastic waste, making it a sustainable and fashionable choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdSix;
