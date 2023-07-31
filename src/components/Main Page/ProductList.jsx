import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    title: "Kotak Tisu",
    image: "../../assets/contoh-1.jpeg",
    price: 100000,
  },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting and ending indexes of products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const productPerPage = 8;
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {currentProducts.map((product) => {
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {/* Pagination */}
    </div>
  );
};

export default ProductList;
