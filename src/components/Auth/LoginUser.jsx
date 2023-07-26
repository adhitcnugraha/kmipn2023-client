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
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "@fontsource/poppins";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

const LoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await login(email, password);
      if (response && response.user_id === 0) {
        alert("Login successful!");

        setTimeout(() => {
          navigate("/client/dashboard");
        }, 3600);
      } else {
        setError("Invalid response from the server");
      }
    } catch (error) {
      setError(error.message || "Email or password is incorrect");
      console.log(error);
    }
  };

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
        Login
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
            style={{ borderRadius: 25, marginBottom: 10 }}
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
              to="/client/register"
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
              component={Link}
              to="/client/seller/register"
            >
              Be a part of seller
            </Button>
          </Typography>
        </div>
      </div>
      {/* Headless UI Transition for the alert */}
      <Transition
        show={isAlertVisible}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Your alert UI */}
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4">
          <p>Login successful!</p>
        </div>
      </Transition>
      {/* Error Alert */}
      <Transition show={error !== ""} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setError("")}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Incorrect
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-red-600">{error}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50"
                    onClick={() => setError("")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default LoginUser;
