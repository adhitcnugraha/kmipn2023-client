import { Grid, TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import "@fontsource/poppins";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 24,
  },
});

const LoginUser = () => {
  return (
    <div
      style={{
        position: "absolute",
        margin: "auto",
        top: "25%",
        left: "35%",
      }}
    >
      <h1
        style={{
          opacity: 0.84,
          color: "#237D1B",
          fontWeight: 700,
          fontSize: 48,
          position: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
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
          position: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        theme={theme}
      >
        Login
      </h1>
      <Grid container style={{ position: "flex", flexDirection: "column" }}>
        <ThemeProvider theme={theme}>
          <TextField
            required
            id="filled-basic"
            label="Email"
            variant="filled"
          />
          <TextField
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </ThemeProvider>
      </Grid>
    </div>
  );
};

export default LoginUser;
