import React from "react";
import Image from "./Image";
import Infos from "./Infos";

const ProductPage = ({ product }) => {
  return (
    <main className="product">
      <div className="left-column">
        <Image
          src={product ? product.img : ""} // pas les {} parce que string uniquement
          alt={product ? product.title : ""}
        />
      </div>

      <div className="right-column">
        <Infos product={product} />
      </div>
    </main>
  );
};

export default ProductPage;
