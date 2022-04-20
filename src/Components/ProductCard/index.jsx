import React from "react";
import Image from "../Image";
import "./index.css";
function ProductCard({ ele }) {
  return (
    <card className="post-card">
      <div
        style={{
          height: "300px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image src={ele.image} />
        <div className="post-card-option">
          <div className="product-icons">
            <i class=" fa-solid fa-solid fa-heart"></i>
          </div>
          <div className="product-icons">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
          <div className="product-icons">
            <i class="fa-solid fa-cart-arrow-down"></i>
          </div>
        </div>
      </div>

      <div className="product-details">
        <p className="product-title text-color-hover">{ele.title}</p>

        <div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>

        <p className="price text-color-hover"> {ele.price}</p>
      </div>
    </card>
  );
}

export default ProductCard;
