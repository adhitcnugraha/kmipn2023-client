import { Typography, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const NavbarSellerForm = () => {
  return (
    <nav className="bg-custom-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 font-poppins">
              <Typography
                theme={theme}
                style={{ color: "white", fontWeight: 600 }}
                className="text-white text-sm md:text-xl"
              >
                MarketDUS
              </Typography>
            </div>
          </div>
          <div className="hidden md:block">
            <Typography
              theme={theme}
              style={{ color: "white", fontWeight: 600 }}
              className="text-white font-semibold text-sm md:text-xl mr-4 md:mr-15"
            >
              Seller Form
            </Typography>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSellerForm;
