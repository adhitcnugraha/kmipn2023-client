import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import exampleImage from "../../assets/contoh-1.jpeg";
import gKunciImage from "../../assets/GKunci.jpg";
import toteBagImage from "../../assets/Tote.jpg";
import { Link } from "react-router-dom";
import "@fontsource/poppins";
import { Box } from "@mui/material";

const ProductCard = ({ to, image, title, price }) => {
  return (
    <Link to={to}>
      <Card
        sx={{
          maxWidth: 250,
          maxHeight: 300,
          borderRadius: "15px",
          marginRight: 6,
        }}
        className="w-full md:w-auto"
      >
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          className="overflow-hidden object-cover"
          style={{
            maxHeight: "190px",
            borderRadius: "15px 15px 0 0",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            fontFamily="Poppins"
            fontWeight={500}
            className="sm:text-left  md:text-left  lg:text-center  text-center"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions className="flex flex-col md:flex-row md:justify-between">
          <Typography
            fontSize={"14px"}
            fontFamily="Poppins"
            fontWeight={500}
            className="md:mr-4 md:ml-10 mt-2 md:mt-0"
            sx={{
              margin: "2px 20px 0 10px",
            }}
          >
            IDR {price}
          </Typography>

          {/* Keranjang */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-2 md:mt-0 md:mr-2 md:ml-10"
            sx={{
              marginRight: "10px",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          {/* Bookmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            sx={{
              marginRight: "0",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </CardActions>
      </Card>
    </Link>
  );
};

const ProductList = () => {
  return (
    <Box
      style={{
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "5px",
      }}
    >
      <ProductCard
        to="/client/product/1"
        image={exampleImage}
        title="Kotak Tisu"
        price="100,000"
      />
      <ProductCard
        to="/client/product/2"
        image={toteBagImage}
        title="Totebag"
        price="90,000"
      />
      <ProductCard
        to="/client/product/3"
        image={gKunciImage}
        title="Gantungan Kunci"
        price="50,000"
      />
    </Box>
  );
};

export default ProductList;
