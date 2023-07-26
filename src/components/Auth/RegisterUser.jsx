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
import { register } from "../../services/api";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      // Call the register function from api.js to register the user
      const response = await register(email, password, fullName);
      console.log(response); // Response from the server (e.g., user information or success message)
      // Handle successful registration here, e.g., show a success message or redirect to a different page
    } catch (error) {
      console.error(error); // Handle registration error, e.g., show an error message to the user
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="opacity-75 text-green-primary font-poppins font-bold text-4xl mb-10 sm:text-2xl md:text-4xl lg:text-6xl">
        MarketDUS
      </h1>
      <h1 className="text-black font-poppins font-semibold text-2xl mb-10 sm:text-lg md:text-2xl lg:text-4xl">
        Register
      </h1>
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md px-6">
        {/* Username */}
        <FormControl
          className="m-1 sm:w-24 md:w-64 lg:w-96 h-14 mt-8"
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-username"
            className="text-black opacity-70 "
          >
            Username
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            label="Username"
            style={{ borderRadius: 25 }}
            endAdornment={
              <InputAdornment
                position="end"
                className="text-black font-poppins"
              />
            }
            className="rounded-3xl text-black"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>
        {/* Email */}
        <FormControl
          className="m-1 sm:w-24 md:w-64 lg:w-96 h-14"
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-email"
            className="font-poppins text-black opacity-70"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <div className="flex flex-col items-center justify-center mt-6">
          <Button
            onClick={handleSubmit}
            component={Link}
            to="/client/login"
            variant="contained"
            className="font-poppins text-white text-2xl rounded-3xl py-2 px-4 w-52 sm:w-24 md:w-48 lg:w-72"
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
              className="mt-16 text-xl text-custom-blue sm:text-base md:text-lg lg:text-xl font-bold font-poppins"
              component={Link}
              to="/client/login"
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 18,
              }}
              theme={theme}
            >
              Have an account? Sign In
            </Button>
          </Typography>
          <Typography>
            <Button
              className="font-bold sm:text-sm md:text-2xl lg:text-xl opacity-80 underline"
              style={{
                color: "#E81616",
                textTransform: "capitalize",
                textDecorationLine: "underline",
                fontWeight: "bold",
                fontSize: 18,
              }}
              theme={theme}
              component={Link}
              to="/client/seller/register"
            >
              Be a part of seller
            </Button>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
