"use client";
import React, { useEffect } from "react";
import "./firstSection.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";

const FirstSection = () => {
  useEffect(() => {
    new Splide(".splide", {
      arrows: false, // Remove arrows
      pagination: false,
    }).mount();
  }, []);

  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        padding: "0",
        margin: "0",
      }}
    >
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div className="image-container">
                <div className="content">
                  <h1>SHOP LATEST BRAND</h1>
                  <h4>On All Your Favorites</h4>
                  <div className="collectionbtn">
                    <button>Browse Collection</button>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1695644228/FabFinds%20Frontend/piotr-szulawski-XjR-Y8PKeww-unsplash_dyphxr.jpg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
