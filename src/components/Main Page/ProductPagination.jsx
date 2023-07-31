import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductPagination = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {currentProducts.map((product) => {
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {/* Pagination */}
      <div>
        <nav>
          <ul>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  className={`${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } py-2 px-4 rounded-l-md rounded-r-md`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductPagination;
