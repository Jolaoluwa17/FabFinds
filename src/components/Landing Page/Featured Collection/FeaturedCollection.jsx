"use client";
import React, { useEffect, useState } from "react";
import "./featuredCollection.css";

const FeaturedCollection = () => {
  const [colorBox, setColorBox] = useState(0);
  const [sizeBox, setSizeBox] = useState(0);

  const handleBoxClick = (index) => {
    setColorBox(index);
  };

  const handleSizeClick = (index) => {
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

  return (
    <div className="featuredCollection-root">
      <div className="featuredCollection-header">
        <h1>Featured Collection</h1>
      </div>
      <div className="featuredCollection-container">
        <div className="featuredCollection-card">
          <div className="img-container">
            <div className="featuredCollection-btn">
              <button>Add To Cart</button>
              <button>Quick View</button>
            </div>
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695727357/FabFinds%20Frontend/khaled-ghareeb--NyPn9up_7o-unsplash_cfpwv8.jpg"
              alt=""
            />
          </div>
          <div className="featuredCollection-details">
            <div className="featuredCollection-name" style={{ marginTop: 10 }}>
              Women Jump Suit
            </div>
            <div
              className="featuredCollection-price"
              style={{ marginTop: 10, fontWeight: "600" }}
            >
              $250.00 USD
            </div>
            <div className="featuredCollection-color" style={{ marginTop: 10 }}>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`box ${colorBox === index ? "active" : ""}`}
                  style={{
                    backgroundColor: box.backgroundColor,
                    cursor: "pointer",
                  }}
                  onClick={() => handleBoxClick(index)}
                ></div>
              ))}
            </div>
            <div className="featuredCollection-size" style={{ marginTop: 10 }}>
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={`size ${sizeBox === index ? "active" : ""}`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size.sizeName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="featuredCollection-card">
          <div className="img-container">
            <div className="featuredCollection-btn">
              <button>Add To Cart</button>
              <button>Quick View</button>
            </div>
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695727357/FabFinds%20Frontend/khaled-ghareeb--NyPn9up_7o-unsplash_cfpwv8.jpg"
              alt=""
            />
          </div>
          <div className="featuredCollection-details">
            <div className="featuredCollection-name" style={{ marginTop: 10 }}>
              Women Jump Suit
            </div>
            <div
              className="featuredCollection-price"
              style={{ marginTop: 10, fontWeight: "600" }}
            >
              $250.00 USD
            </div>
            <div className="featuredCollection-color" style={{ marginTop: 10 }}>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`box ${colorBox === index ? "active" : ""}`}
                  style={{
                    backgroundColor: box.backgroundColor,
                    cursor: "pointer",
                  }}
                  onClick={() => handleBoxClick(index)}
                ></div>
              ))}
            </div>
            <div className="featuredCollection-size" style={{ marginTop: 10 }}>
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={`size ${sizeBox === index ? "active" : ""}`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size.sizeName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="featuredCollection-card">
          <div className="img-container">
            <div className="featuredCollection-btn">
              <button>Add To Cart</button>
              <button>Quick View</button>
            </div>
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695727357/FabFinds%20Frontend/khaled-ghareeb--NyPn9up_7o-unsplash_cfpwv8.jpg"
              alt=""
            />
          </div>
          <div className="featuredCollection-details">
            <div className="featuredCollection-name" style={{ marginTop: 10 }}>
              Women Jump Suit
            </div>
            <div
              className="featuredCollection-price"
              style={{ marginTop: 10, fontWeight: "600" }}
            >
              $250.00 USD
            </div>
            <div className="featuredCollection-color" style={{ marginTop: 10 }}>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`box ${colorBox === index ? "active" : ""}`}
                  style={{
                    backgroundColor: box.backgroundColor,
                    cursor: "pointer",
                  }}
                  onClick={() => handleBoxClick(index)}
                ></div>
              ))}
            </div>
            <div className="featuredCollection-size" style={{ marginTop: 10 }}>
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={`size ${sizeBox === index ? "active" : ""}`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size.sizeName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="featuredCollection-card">
          <div className="img-container">
            <div className="featuredCollection-btn">
              <button>Add To Cart</button>
              <button>Quick View</button>
            </div>
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695727357/FabFinds%20Frontend/khaled-ghareeb--NyPn9up_7o-unsplash_cfpwv8.jpg"
              alt=""
            />
          </div>
          <div className="featuredCollection-details">
            <div className="featuredCollection-name" style={{ marginTop: 10 }}>
              Women Jump Suit
            </div>
            <div
              className="featuredCollection-price"
              style={{ marginTop: 10, fontWeight: "600" }}
            >
              $250.00 USD
            </div>
            <div className="featuredCollection-color" style={{ marginTop: 10 }}>
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`box ${colorBox === index ? "active" : ""}`}
                  style={{
                    backgroundColor: box.backgroundColor,
                    cursor: "pointer",
                  }}
                  onClick={() => handleBoxClick(index)}
                ></div>
              ))}
            </div>
            <div className="featuredCollection-size" style={{ marginTop: 10 }}>
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={`size ${sizeBox === index ? "active" : ""}`}
                  onClick={() => handleSizeClick(index)}
                >
                  {size.sizeName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
