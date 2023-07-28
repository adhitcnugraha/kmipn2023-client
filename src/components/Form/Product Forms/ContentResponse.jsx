import React from "react";
import Navbar from "./Navbar";
import { createTheme, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const ContentResponse = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
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
          Now you can check your catalog product
        </h1>
        <div className="flex flex-col items-center justify-center mt-6">
          <Button
            component={Link}
            to="/client/seller/dashboard"
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
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentResponse;
