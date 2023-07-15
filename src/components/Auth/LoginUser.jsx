import {
  FormControl,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
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
    fontSize: 24,
  },
});

const LoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
        height: "125vh",
      }}
    >
      <h1
        style={{
          opacity: 0.84,
          color: "#237D1B",
          fontWeight: 700,
          fontSize: 48,
          marginBottom: 30,
        }}
        theme={theme}
      >
        MarketDUS
      </h1>
      <h1
        style={{
          color: "black",
          fontSize: 36,
          fontWeight: 600,
        }}
        theme={theme}
      >
        Login
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "30px",
        }}
      >
        <ThemeProvider theme={theme}>
          <FormControl
            sx={{ m: 1, width: "500px", height: "90px", marginTop: "10vh" }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-email"
              style={{ color: "#000000", opacity: 0.7 }}
              theme={theme}
            >
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              label="Email"
              endAdornment={
                <InputAdornment position="end" style={{ color: "#000000" }} />
              }
              style={{ borderRadius: "25px", color: "#000000" }}
            />
          </FormControl>
          {/* Password */}
          <FormControl sx={{ m: 1, width: "500px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "#000000", opacity: 0.7 }}
              theme={theme}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="password"
              endAdornment={
                <InputAdornment position="end" style={{ color: "#000000" }}>
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
              style={{ borderRadius: "25px", color: "#000000" }}
            />
          </FormControl>
          <Button
            component={Link}
            to="/client/dashboard"
            variant="contained"
            style={{
              color: "white",
              marginTop: "5vh",
              fontSize: 24,
              borderRadius: 14,
              background: "#50A088",
              textTransform: "none",
              width: 209,
            }}
            theme={theme}
          >
            Submit
          </Button>
          <Typography>
            <Button
              theme={theme}
              style={{
                fontWeight: "bold",
                marginTop: "6vh",
                textTransform: "none",
                fontSize: 20,
                color: "#0D4586",
              }}
              component={Link}
              to="/client/register"
            >
              Don’t have an account? Register here
            </Button>
          </Typography>
          <Typography>
            <Button
              theme={theme}
              style={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: 20,
                color: "#E81616",
                opacity: 0.8,
              }}
              component={Link}
              to="/client/seller/register"
            >
              Be a part of seller
            </Button>
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default LoginUser;
