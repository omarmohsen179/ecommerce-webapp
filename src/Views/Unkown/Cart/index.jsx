import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "./index.css";
import IncrementInput from "../../../Components/IncrementInput";
function Cart(props) {
  const { t, i18n } = useTranslation();
  useEffect(() => {}, []);
  const data = [
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "UK",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
    {
      image: "https://designmodo.com/demo/shopping-cart/item-1.png",
      name: "Common Projects",
      Note: "US",
      Quantity: 2,
      price: 23,
    },
  ];
  return (
    <>
      <div
        className="shopping-cart"
        style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      >
        <div className="title">Shopping Bag</div>
        {data.map((ele) => (
          <div className="item row">
            <div className="col-1 buttons">
              <span className="fas fa-xmark"></span>
              <span className="fas fa-heart"></span>
            </div>

            <div className="col image">
              <img src={ele.image} alt="" />
            </div>

            <div className="col description">
              <span>{ele.name}</span>

              <span>{ele.note}</span>
            </div>

            <div className="col quantity">
              <IncrementInput value={ele.Quantity} name={"Quantity"} />
            </div>

            <div className="col total-price">{ele.price}$</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
