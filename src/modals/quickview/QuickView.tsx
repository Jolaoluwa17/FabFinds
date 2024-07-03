"use client";
import React, { useState } from "react";
import "./quickView.css";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { LiaMinusSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";

interface QuickViewProps {
  quickview: boolean;
  setQuickView: (quickview: boolean) => void;
}

const QuickView: React.FC<QuickViewProps> = ({ quickview, setQuickView }) => {
  const [colorBox, setColorBox] = useState(0);
  const [sizeBox, setSizeBox] = useState(0);

  const handleBoxClick = (index: any) => {
    setColorBox(index);
  };

  const handleSizeClick = (index: any) => {
    setSizeBox(index);
  };

  const boxes = [
    { backgroundColor: "black" },
    { backgroundColor: "#008000" },
    { backgroundColor: "#ffc0cb" },
    { backgroundColor: "#ff0000" },
    { backgroundColor: "#ffff00" },
  ];

  const sizes = [
    { sizeName: "XL" },
    { sizeName: "L" },
    { sizeName: "M" },
    { sizeName: "S" },
  ];

  const [qty, setqty] = useState(1);
  const maxAmount = 300;
  const amount = 200;

  const handleIncrease = () => {
    setqty((prevAmount) => prevAmount + 1);
  };

  const handleDecrease = () => {
    setqty((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
  };

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setqty(value);
    } else if (event.target.value === "") {
      setqty(0);
    }
  };

  return quickview ? (
    <div className="quickView_root">
      <div className="quickview_container">
        <div className="quickview_left_section"></div>
        <div className="quickview_right_section">
          <div className="top_section">
            <p>Self</p>
            <div className="quickview_header">
              <div
                className="cancelBtn"
                onClick={() => {
                  setQuickView(false);
                }}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="quickview_title">
            FITNESS Women, Unisex, Men Shapewear
          </div>
          <div className="serial_no">SKU: 789654123</div>
          <div className="quickview_price">$250.00 USD</div>
          <div className="quickview_color_picker">
            <p>Color</p>
            <div
              className=""
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              {boxes.map((box, index) => (
                <div
                  className={`quickview_active1 ${
                    colorBox === index ? "quickview_active" : ""
                  }`}
                >
                  <div
                    key={index}
                    className={`quickviewbox`}
                    style={{
                      backgroundColor: box.backgroundColor,
                      cursor: "pointer",
                    }}
                    onClick={() => handleBoxClick(index)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="quickview_size">
            <p>Size</p>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={`quick_view_size ${
                    sizeBox === index ? "quick_view_size_active" : ""
                  }`}
                  onClick={() => handleSizeClick(index)}
                  style={{cursor: "pointer"}}
                >
                  {size.sizeName}
                </div>
              ))}
            </div>
          </div>
          <div className="quick_view_qty">
            <p>Quantity</p>
            <div className="quick_view_amount">
              <div className="quick_view_add_btn" onClick={handleDecrease}>
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
              <div className="quick_view_minus_btn" onClick={handleIncrease}>
                <IoMdAdd />
              </div>
            </div>
          </div>
          <button className="quick_view_add_to_cart">
            Add To Cart <IoMdCart fontSize={20} style={{ marginLeft: "5px" }} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default QuickView;
