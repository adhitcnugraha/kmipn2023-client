import { createTheme, Button } from "@mui/material";
import NavbarSellerForm from "./NavbarSellerForm.jsx";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const SellerFormStepTwo = () => {
  const [checkedItems, setCheckedItems] = useState({
    Anteraja: false,
    SiCepat: false,
    "Ninja Xpress": false,
    "J&T Express": false,
    JNE: false,
    "Pos Reguler": false,
    "ID Express": false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  return (
    <div>
      <NavbarSellerForm />
      <div className="flex flex-col items-center justify-center mt-10">
        <ul
          className="flex justify-between border-b-2 pb-3 font-poppins font-semibold"
          style={{ width: "50%", marginBottom: 10 }}
        >
          <li className="mr-4 opacity-40">Information</li>
          <li className="mr-4 ">Delivery Service</li>
          <li className="mr-4 opacity-40">Send</li>
        </ul>

        <div className="flex flex-col items-center justify-center space-y-6 mt-10">
          <h5 className="font-poppins font-semibold">
            Set the delivery service you want:
          </h5>
          {/* List Delivery Package code here */}
          <div className="bg-cus-grey p-3 rounded border border-gray-300">
            <div className="space-y-2">
              {Object.entries(checkedItems).map(([key, value]) => (
                <div key={key} className="bg-cus-grey p-3 rounded w-500">
                  <label className="flex items-center cursor-pointer font-poppins font-semibold">
                    <span className="ml-2 text-gray-700">{key}</span>
                    <input
                      type="checkbox"
                      name={key}
                      className="ml-auto h-5 w-5 text-indigo-600 border-cus-grey rounded focus:ring-indigo-500"
                      checked={value}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Button */}
          <div className="flex flex-col items-center justify-center mt-6">
            <Button
              component={Link}
              to="/client/seller/form/3"
              variant="contained"
              className=" text-white text-2xl rounded-3xl py-2 px-4 w-52 "
              style={{
                background: "#50A088",
                textTransform: "capitalize",
                borderRadius: 25,
                marginBottom: 60,
              }}
              theme={theme}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerFormStepTwo;
