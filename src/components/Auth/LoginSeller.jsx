import {
  FormControl,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  createTheme,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import "@fontsource/poppins";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const LoginSeller = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="opacity-75 text-green-primary font-poppins font-bold text-4xl mb-10 sm:text-2xl md:text-4xl lg:text-6xl">
        MarketDUS
      </h1>
      <h1 className="text-black font-poppins font-semibold text-2xl mb-10 sm:text-lg md:text-2xl lg:text-4xl">
        Seller Login
      </h1>
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md px-6">
        {/* Email */}
        <FormControl
          className="m-1 sm:w-24 md:w-64 lg:w-96 h-14 mt-8 "
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-email"
            className="text-black opacity-70"
            theme={theme}
          >
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            label="Email"
            style={{ borderRadius: 25 }}
            endAdornment={
              <InputAdornment position="end" className="text-black" />
            }
            className="rounded-3xl text-black"
          />
        </FormControl>
        {/* Password */}
        <FormControl
          className="m-1 sm:w-24 md:w-64 lg:w-96 mb-10"
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            className="text-black opacity-70"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            style={{ borderRadius: 25 }}
            endAdornment={
              <InputAdornment position="end" className="text-black">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            className="rounded-3xl text-black"
          />
        </FormControl>
        <div className="flex flex-col items-center justify-center mt-6">
          <Button
            component={Link}
            to="/client/seller/form/1"
            variant="contained"
            className=" font-poppins text-white text-2xl rounded-3xl py-2 px-4 w-52 sm:w-24 md:w-48 lg:w-72"
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
          <Typography>
            <Button
              className="mt-16 text-xl text-custom-blue sm:text-sm md:text-lg lg:text-xl font-bold font-poppins"
              component={Link}
              to="/client/login"
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 18,
              }}
              theme={theme}
            >
              Don’t have an account? Register here
            </Button>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginSeller;
