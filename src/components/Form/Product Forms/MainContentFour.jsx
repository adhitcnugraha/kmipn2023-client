import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Button, Radio } from "@material-tailwind/react";

const MainContentFour = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 font-poppins font-semibold p-4">
          <nav>
            <ul className="space-y-2 font-poppins font-semibold">
              <li className="relative pl-8 mb-6 mt-2">
                <a href="/client/seller/addproduct/1" className="block">
                  Product Information
                </a>
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-slate-300"></span>
              </li>
              <li className="relative pl-8" style={{ marginBottom: 20 }}>
                <a href="/client/seller/addproduct/2" className="block">
                  Selling Information
                </a>
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-slate-300"></span>
              </li>
              <li className="relative pl-8" style={{ marginBottom: 20 }}>
                <a href="/client/seller/addproduct/3" className="block">
                  Shipping
                </a>
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-slate-300"></span>
              </li>
              <li className="relative pl-8">
                <a href="/client/seller/addproduct/4" className="block">
                  Other
                </a>
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-custom-green"></span>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="w-px bg-gray-600 mr-2"></div>
        <div className="flex-1 p-4 overflow-y-auto">
          <h1 className="text-2xl mb-4 underline font-poppins font-semibold">
            Other
          </h1>
          {/* Pre Order */}
          <div className="flex items-center gap-10">
            <h4 className="font-poppins font-medium mt-4">Pre Order</h4>
            <Radio name="preOrder" label="No" />
            <Radio name="preOrder" label="Yes" />
          </div>

          {/* Product Condition */}
          <div className="flex items-center gap-10 mt-3">
            <h4 className="font-poppins font-medium mt-4">Product Condition</h4>
            <Radio name="condition" label="Secondhand" />
            <Radio name="condition" label="New" />
          </div>

          {/* Product Code */}
          <label className="block">
            <h4 className="font-poppins font-medium mt-7">Product Code</h4>
            <input
              required
              type="product code"
              name="Product Code"
              className="font-poppins mt-3 px-3 py-2 bg-cus-grey border shadow-sm border-black placeholder-black placeholder-opacity-40 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
              placeholder="AB123"
            />
          </label>

          {/* Button */}
          <div className="relative flex flex-col items-end justify-end h-52">
            <Link to="/client/seller/addproduct/4">
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
    </div>
  );
};

export default MainContentFour;
