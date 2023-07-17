import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";

const SellerFormStep = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    // step - step
    <div className="flex flex-col items-center justify-center mt-10">
      <ul
        className="flex justify-between border-b-2 pb-3 font-poppins font-semibold"
        style={{ width: "50%", marginBottom: 10 }}
      >
        <li
          className={`mr-4 ${activeItem !== 1 ? "opacity-40" : ""}`}
          onClick={() => handleClick(1)}
        >
          Information
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

        {/* Username */}
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
      </div>
    </div>
  );
};

export default SellerFormStep;
