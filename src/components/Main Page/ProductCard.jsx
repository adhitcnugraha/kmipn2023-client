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

const ProductCard = () => {
  return (
    <Box
      style={{
        padding: 40,
        display: "flex",
        alignItems: "justify-between",
      }}
    >
      {/* Product 1 */}
      <Link to="/client/product/1">
        <Card
          sx={{
            maxWidth: 250,
            maxHeight: 300,
            borderRadius: "15px",
            marginRight: 6,
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={exampleImage}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              fontFamily="Poppins"
              fontWeight={500}
              sx={{ textAlign: "center" }}
            >
              Kotak Tisu
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              fontSize={"14px"}
              fontFamily="Poppins"
              fontWeight={500}
              marginRight={"40px"}
              marginLeft={"10px"}
            >
              IDR 100,000
            </Typography>

            {/* Keranjang */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 ml-10"
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

      {/* Product 2 */}
      <Link to="/client/product/2">
        <Card
          sx={{
            maxWidth: 250,
            maxHeight: 300,
            borderRadius: "15px",
            marginRight: 6,
          }}
        >
          <CardMedia
            component="img"
            alt="totebag daur ulang"
            height="140"
            width="100%"
            image={toteBagImage}
            style={{
              objectFit: "cover",
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
              sx={{ textAlign: "center" }}
            >
              Totebag
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              fontSize={"14px"}
              fontFamily="Poppins"
              fontWeight={500}
              marginRight={"40px"}
              marginLeft={"10px"}
            >
              IDR 90,000
            </Typography>

            {/* Keranjang */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 ml-10"
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

      {/* Product 3 */}
      <Link to="/client/product/3">
        <Card
          sx={{
            maxWidth: 250,
            maxHeight: 300,
            borderRadius: "15px",
            marginRight: 6,
          }}
        >
          <CardMedia
            component="img"
            alt="gantungan kunci"
            height="140"
            width="100%"
            image={gKunciImage}
            style={{
              objectFit: "cover",
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
              sx={{ textAlign: "center" }}
            >
              Gantungan Kunci
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              fontSize={"14px"}
              fontFamily="Poppins"
              fontWeight={500}
              marginRight={"40px"}
              marginLeft={"10px"}
            >
              IDR 50,000
            </Typography>

            {/* Keranjang */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 ml-10"
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
    </Box>
  );
};

export default ProductCard;
