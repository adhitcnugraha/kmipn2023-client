import React, { useState } from "react";
import Navbar from "./Navbar";
import exampleImage from "../../assets/contoh-1.jpeg";
import PaymentPage from "../Payment/PaymentPage";

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
          src={exampleImage}
          alt="example"
          className="w-80 h-80 rounded-2xl border-4 border-gray-300 mr-10"
        />
        <div className="flex font-poppins flex-col">
          <h2 className="text-4xl font-bold mb-4">Kotak Tisu</h2>
          <p className="text-xl text-gray-600 mb-4">IDR 100,000</p>
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
          </div>

          <div className="mt-8">
            {/* Add the modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg">
                  {/* Pass the required props to the PaymentPage component */}
                  <PaymentPage
                    totalAmount={quantity * 100000}
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
              <li>Color: Rainbow</li>
              <li>Size: 10 x 10 x 5 cm</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Description:</h3>
            <p>
              The "Kotak Tisu" tissue box is a perfect blend of functionality
              and style. Keep tissues within easy reach in your living room,
              bedroom, kitchen, or office with this convenient and modern
              storage solution. The white color complements any decor, while the
              compact size allows it to seamlessly fit into smaller spaces.
            </p>
            <p className="mt-4">
              Refilling is a breeze - just lift the top cover, insert a new
              tissue stack, and close it securely. The sturdy plastic
              construction ensures that your tissues remain clean and protected
              from dust and moisture.
            </p>
            <p className="mt-4">
              Whether you need a tissue box for your home, office, or a
              thoughtful gift for someone special, the "Kotak Tisu" is an ideal
              choice. Elevate your space with this essential and elegant
              accessory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdOne;
