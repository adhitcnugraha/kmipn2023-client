import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  createTheme,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavbarSellerForm from "./NavbarSellerForm.jsx";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const SellerFormStep = () => {
  return (
    <div>
      <NavbarSellerForm />
      {/* Steps */}
      <div className="flex flex-col items-center justify-center mt-10">
        <ul
          className="flex justify-between border-b-2 pb-3 font-poppins font-semibold"
          style={{ width: "50%", marginBottom: 10 }}
        >
          <li className="mr-4">Information</li>
          <li className="mr-4 opacity-40">Delivery Service</li>
          <li className="mr-4 opacity-40">Send</li>
        </ul>

        <div className="flex flex-col items-center justify-center space-y-6 mt-10">
          {/* Shopname */}
          <FormControl
            className="m-1 w-96 h-10 mt-8 font-poppins"
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            <InputLabel
              htmlFor="outlined-adornment-username"
              className="text-black opacity-70 "
            >
              Shop Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              label="Shop Name"
              style={{ borderRadius: 25 }}
              endAdornment={
                <InputAdornment
                  position="end"
                  className="text-black font-poppins"
                />
              }
              className="rounded-3xl text-black"
            />
          </FormControl>

          {/* Address */}
          <FormControl
            className="m-1 w-96 h-10 mt-8 font-poppins"
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            <InputLabel
              htmlFor="outlined-adornment-username"
              className="text-black opacity-70 "
            >
              Address
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment"
              label="Address"
              style={{ borderRadius: 25 }}
              endAdornment={
                <InputAdornment
                  position="end"
                  className="text-black font-poppins"
                />
              }
              className="rounded-3xl text-black"
            />
          </FormControl>

          {/* Phone Number */}
          <FormControl
            className="m-1 w-96 h-10 mt-8 font-poppins"
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            <InputLabel
              htmlFor="outlined-adornment-username"
              className="text-black opacity-70 "
            >
              Phone Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              label="Phone Number"
              style={{ borderRadius: 25 }}
              endAdornment={
                <InputAdornment
                  position="end"
                  className="text-black font-poppins"
                />
              }
              className="rounded-3xl text-black"
            />
          </FormControl>

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

export default SellerFormStep;
