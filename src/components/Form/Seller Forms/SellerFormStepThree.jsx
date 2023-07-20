import React from "react";
import { Link } from "react-router-dom";
import { createTheme, Button } from "@mui/material";
import NavbarSellerForm from "./NavbarSellerForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const SellerFormStepThree = () => {
  return (
    <div>
      <NavbarSellerForm />
      <div className="flex flex-col items-center justify-center mt-10">
        <ul
          className="flex justify-between border-b-2 pb-3 font-poppins font-semibold"
          style={{ width: "50%", marginBottom: 10 }}
        >
          <li className="mr-4 opacity-40">Information</li>
          <li className="mr-4 opacity-40">Delivery Service</li>
          <li className="mr-4">Send</li>
        </ul>
        <CheckCircleIcon
          style={{
            color: "green",
            fontSize: "10rem",
            marginTop: "50px",
            marginBottom: "10px",
          }}
        />
        <h1 className="font-poppins font-semibold text-4xl mb-7">Success</h1>
        <h1 className="font-poppins text-xl mb-7">
          Now you can proceed with adding your first product
        </h1>
        <div className="flex flex-col items-center justify-center mt-6">
          <Button
            component={Link}
            to="/client/seller/addproduct/1"
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
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerFormStepThree;
