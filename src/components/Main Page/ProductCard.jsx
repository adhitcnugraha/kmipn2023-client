import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import exampleImage from "../../assets/contoh-1.jpeg";
import "@fontsource/poppins";
import { Box } from "@mui/material";

const ProductCard = () => {
  return (
    <Box padding={"30px"}>
      <Card sx={{ maxWidth: 250, maxHeight: 300, borderRadius: "15px" }}>
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
          <Typography fontSize={"14px"} fontFamily="Poppins" fontWeight={500}>
            IDR 100,000
          </Typography>
          {/* Perlu tambahan kode untuk gambar keranjang dan favorit */}
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
