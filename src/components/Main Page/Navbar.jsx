import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-custom-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                alt="logo"
                src={Logo}
                style={{
                  maxWidth: 240,
                  maxHeight: 200,
                  marginRight: 20,
                }}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="text-white-color font-poppins font-semibold mr-10">
                  <Link
                    to="/client/profile"
                    className="text-white-color font-poppins font-semibold mr-10"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/client/shop"
                    href="#"
                    className="text-white-color font-poppins font-semibold mr-10"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/client/contact"
                    className="text-white-color font-poppins font-semibold mr-10"
                  >
                    Contact
                  </Link>
                  <Link to="/client/login">Logout</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <input
                className="bg-gray-300 text-black-opacity-60 px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500  mr-10"
                type="text"
                placeholder="Search ..."
              />
              <button type="submit" className="hidden">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
