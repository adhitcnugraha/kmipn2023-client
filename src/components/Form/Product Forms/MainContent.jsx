import { Button } from "@material-tailwind/react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const MainContent = () => {
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [uploadedVideoName, setUploadedVideoName] = useState("");

  const onDropImage = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setUploadedImageName(acceptedFiles[0].name);
  }, []);

  const onDropVideo = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setUploadedVideoName(acceptedFiles[0].name);
  }, []);

  const {
    getRootProps: getRootPropsImage,
    getInputProps: getInputPropsImage,
    isDragActive: isDragActiveImage,
  } = useDropzone({
    onDrop: onDropImage,
    accept: "image/*",
  });

  const {
    getRootProps: getRootPropsVideo,
    getInputProps: getInputPropsVideo,
    isDragActive: isDragActiveVideo,
  } = useDropzone({
    onDrop: onDropVideo,
    accept: "video/*",
  });
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
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-custom-green"></span>
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
                <span className="absolute top-2 left-0 h-3 w-3 rounded-full bg-slate-300"></span>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="w-px bg-gray-600 mr-2"></div>
        <div className="flex-1 p-4 overflow-y-auto">
          <h1 className="text-2xl mb-4 underline font-poppins font-semibold">
            Product Information
          </h1>
          <div className="mr-10">
            <h4 className="font-poppins font-medium">Product Photo</h4>
            <div
              {...getRootPropsImage()}
              style={{
                border: "2px dashed black",
                padding: "20px",
                marginBottom: "20px",
                marginTop: 10,
                background: "#D9D9D9",
              }}
            >
              <input {...getInputPropsImage()} />
              {isDragActiveImage ? (
                <p className="font-poppins">Put image file here ...</p>
              ) : (
                <p className="font-poppins">
                  Drag and drop image file here, or click to choose file.
                </p>
              )}
              {uploadedImageName && (
                <p className="font-poppins">
                  Uploaded Image: {uploadedImageName}
                </p>
              )}
            </div>

            <h4 className="font-poppins font-medium">Product Video</h4>
            <div
              {...getRootPropsVideo()}
              style={{
                border: "2px dashed black",
                padding: "20px",
                marginBottom: 20,
                marginTop: 10,
                background: "#D9D9D9",
              }}
            >
              <input {...getInputPropsVideo()} />
              {isDragActiveVideo ? (
                <p className="font-poppins">Letakkan video file di sini ...</p>
              ) : (
                <p className="font-poppins">
                  Drag and drop video file here, or click to choose file.
                </p>
              )}
              {uploadedVideoName && (
                <p className="font-poppins">
                  Uploaded Video: {uploadedVideoName}
                </p>
              )}
            </div>
          </div>
          {/* Product Name */}
          <label className="block">
            <h4 className="font-poppins font-medium">
              Product Name <strong className="text-red-600">*</strong>
            </h4>
            <input
              required
              type="product"
              name="Product Name"
              className="font-poppins mt-3 px-3 py-2 bg-cus-grey border shadow-sm border-black placeholder-black placeholder-opacity-40 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
              placeholder="Kotak Sampah"
            />
          </label>

          {/* Category */}
          <label className="block">
            <h4 className="font-poppins font-medium mt-3">
              Category <strong className="text-red-600">*</strong>
            </h4>
            <input
              required
              type="category"
              name="Category"
              className="font-poppins mt-3 px-3 py-2 bg-cus-grey border shadow-sm border-black placeholder-black placeholder-opacity-40 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
              placeholder="Barang Daur Ulang"
            />
          </label>

          {/* Description */}
          <label className="sm:block">
            <h4 className="font-poppins font-medium mt-3">
              Description <strong className="text-red-600">*</strong>
            </h4>
            <input
              required
              type="description"
              name="Description"
              className="font-poppins mt-3 px-3 py-2 h-32  bg-cus-grey border shadow-sm border-black placeholder-cus-grey focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
              placeholder="Kotak Sampah"
            />
          </label>

          <div className="flex flex-col items-end justify-center mt-6">
            <Link to="/client/seller/addproduct/2">
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

export default MainContent;
