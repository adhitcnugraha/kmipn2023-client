import React, { useState } from "react";

const SellerFormStep = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    // STEP
    <div className="flex justify-center mt-10">
      <ul
        className="flex justify-between border-b-2 pb-3 font-poppins font-semibold"
        style={{ width: "50%" }}
      >
        <li
          className={`mr-4 ${activeItem !== 1 ? "opacity-40" : ""}`}
          onClick={() => handleClick(1)}
        >
          Informasi
        </li>
        <li
          className={`mr-4 ${activeItem !== 2 ? "opacity-40" : ""}`}
          onClick={() => handleClick(2)}
        >
          Delivery Service
        </li>
        <li
          className={`mr-4 ${activeItem !== 3 ? "opacity-40" : ""}`}
          onClick={() => handleClick(3)}
        >
          Send
        </li>
      </ul>
    </div>
  );
};

export default SellerFormStep;
