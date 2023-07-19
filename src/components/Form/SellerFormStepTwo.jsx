import { createTheme, Button } from "@mui/material";
import NavbarSellerForm from "./NavbarSellerForm.jsx";
import { Link } from "react-router-dom";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const SellerFormStepTwo = () => {
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
          {/* List Delivery Package code here */}
          {/* example Sicepat, JnT, etc */}
          {/* ... */}
          {/* Button */}
          <div className="flex flex-col items-center justify-center mt-6">
            <Button
              component={Link}
              to="/client/seller/form/2"
              variant="contained"
              className=" text-white text-2xl rounded-3xl py-2 px-4 w-52 "
              style={{
                background: "#50A088",
                textTransform: "capitalize",
                borderRadius: 25,
                marginBottom: 10,
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
