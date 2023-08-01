import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Button } from "@material-tailwind/react";

const Profile = () => {
  const [username, setUsername] = useState("adhitcnugraha");
  const [email, setEmail] = useState("adhitcnugraha@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("082171626382");
  const [name, setName] = useState("Adhit");

  return (
    <>
      <Navbar />

      <div className="container flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4 flex items-center space-y-4 mr-10">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt="Foto Profil"
            className="rounded-full w-24 h-24 mr-6 ml-6 mt-3"
          />
          <div>
            <h2 className="text-sm font-semibold font-poppins">{username}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="w-3/4 p-4">
          <div className="font-poppins mt-3">
            <h2 className="text-2xl font-semibold mb-2">My Profile</h2>
            <p className="text-gray-600">Manage your profile account here.</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 mt-10 w-11/12 md:w-1/2">
            {/* Username */}
            <FormControl
              className="m-1 w-full h-10 mt-8 font-poppins"
              variant="outlined"
              style={{ marginBottom: 20 }}
            >
              <InputLabel
                htmlFor="outlined-adornment-username"
                className="text-black opacity-70"
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            {/* Username */}
            <FormControl
              className="m-1 w-full h-10 mt-8 font-poppins"
              variant="outlined"
              style={{ marginBottom: 20 }}
            >
              <InputLabel
                htmlFor="outlined-adornment-name"
                className="text-black opacity-70"
              >
                Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                label="Name"
                style={{ borderRadius: 25 }}
                endAdornment={
                  <InputAdornment
                    position="end"
                    className="text-black font-poppins"
                  />
                }
                className="rounded-3xl text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            {/* Email */}
            <FormControl
              className="m-1 w-full h-10 mt-8 font-poppins"
              variant="outlined"
              style={{ marginBottom: 20 }}
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
                  <InputAdornment
                    position="end"
                    className="text-black font-poppins"
                  />
                }
                className="rounded-3xl text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            {/* Phone Number */}
            <FormControl
              className="m-1 w-full h-10 mt-8 font-poppins"
              variant="outlined"
              style={{ marginBottom: 20 }}
            >
              <InputLabel
                htmlFor="outlined-adornment-phone-number"
                className="text-black opacity-70"
              >
                Phone Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-phone-number"
                label="Phone Number"
                style={{ borderRadius: 25 }}
                endAdornment={
                  <InputAdornment
                    position="end"
                    className="text-black font-poppins"
                  />
                }
                className="rounded-3xl text-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-end justify-center mt-6">
            <Link to="/client/profile/response">
              <Button
                variant="contained"
                className="text-white text-xl rounded-3xl py-2 px-4 w-32 mt-6 font-poppins"
                style={{
                  background: "#50A088",
                  textTransform: "capitalize",
                  borderRadius: 25,
                }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
