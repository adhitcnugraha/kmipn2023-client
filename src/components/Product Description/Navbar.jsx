import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logolandingpage.PNG";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
                  maxWidth: 100,
                  maxHeight: 100,
                  marginRight: 20,
                }}
              />
            </div>
            {/* Large and Medium Screens */}
            <div className="hidden lg:flex md:flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="text-white-color font-poppins font-semibold mr-10">
                  <Link
                    to="/client/profile"
                    className="text-white-color font-poppins font-semibold mr-10"
                  >
                    Profile
                  </Link>
                  {/* <Link
                  to="/client/shop"
                  className="text-white-color font-poppins font-semibold mr-10"
                >
                  Shop
                </Link> */}
                  {/* <Link
                  to="/client/contact"
                  className="text-white-color font-poppins font-semibold mr-10"
                >
                  Contact
                </Link> */}
                  <Link to="/client/login">Logout</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="text-white-color hover:text-white-color focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/client/profile"
              className="text-white-color block px-3 py-2 rounded-md font-poppins font-semibold"
            >
              Profile
            </Link>
            {/* <Link
            to="/client/shop"
            className="text-white-color block px-3 py-2 rounded-md font-poppins font-semibold"
          >
            Shop
          </Link> */}
            {/* <Link
            to="/client/contact"
            className="text-white-color block px-3 py-2 rounded-md font-poppins font-semibold"
          >
            Contact
          </Link> */}
            <Link
              to="/client/login"
              className="text-white-color block px-3 py-2 rounded-md font-poppins font-semibold"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
