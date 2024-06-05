"use client";

import React, { useState } from "react";
import "./cart.css";
import { IoMdAdd } from "react-icons/io";
import { LiaMinusSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Cart() {
  const [qty, setqty] = useState(1);
  const maxAmount = 300;
  const amount = 200;

  const handleIncrease = () => {
    setqty((prevAmount) => prevAmount + 1);
  };

  const handleDecrease = () => {
    setqty((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setqty(value);
    } else if (event.target.value === "") {
      setqty(0);
    }
  };

  return (
    <div className="cart_root">
      <div className="cart_list">
        <div className="cart_item">
          <div className="left_section">
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695727357/FabFinds%20Frontend/khaled-ghareeb--NyPn9up_7o-unsplash_cfpwv8.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="right_section">
            <p className="description">
              Women Co-ords Green, Blue, White Dress
            </p>
            <p className="price">$250.00</p>
            <p className="color">
              Color: <span style={{ fontWeight: 600 }}>Black</span>
            </p>
            <p className="size">
              Size: <span style={{ fontWeight: 600 }}>XL</span>
            </p>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <div className="amount">
                <div className="add_btn" onClick={handleDecrease}>
                  <LiaMinusSolid />
                </div>
                <input
                  type="text"
                  value={qty}
                  onChange={handleChange}
                  style={{
                    fontSize: "16px",
                    width: "50px",
                    textAlign: "center",
                    border: "none",
                    outline: "none",
                  }}
                />
                <div className="minus_btn" onClick={handleIncrease}>
                  <IoMdAdd />
                </div>
              </div>
              <div className="delete_btn">
                <RiDeleteBin6Fill fontSize={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="billing_content">
        <div style={{ color: "#121212" }}>
          only <span style={{ fontWeight: 600, color: "black" }}>$350.00</span>{" "}
          away from free shipping
        </div>
        <div className="loader-bar-container">
          <div
            className="loader-bar"
            style={{ width: `${(amount / maxAmount) * 100}%` }}
          ></div>
        </div>
        <div className="sub_total">
          <p style={{ fontSize: "16px", fontWeight: 600 }}>Subtotal</p>
          <p style={{ fontSize: "20px" }}>$1,150.00 USD</p>
        </div>
        <p className="more_info">Taxes an shipping calculated at checkout</p>
        <div className="view_check_btn_container">
          <button className="view_check_btn">View Cart</button>
          <button className="view_check_btn">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
