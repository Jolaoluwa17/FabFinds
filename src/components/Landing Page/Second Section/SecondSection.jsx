"use client";
import React, { useEffect } from "react";
import "./secondSection.css";

const SecondSection = () => {
  return (
    <div className="secondSec-container">
      <div className="images-container-SS">
        <div className="individual-image">
          <div className="content-SS">
            <h4>Starting from 1200</h4>
            <h2>Women Fashion</h2>
            <p>Shop Now</p>
          </div>
          <img
            src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496959/FabFinds%20Frontend/ivana-cajina-_7LbC5J-jw4-unsplash_ab4mw6.jpg"
            alt=""
          />
        </div>
        <div className="individual-image">
          <div className="content-SS">
            <h4>New Trends</h4>
            <h2>Men Fashion</h2>
            <p>Shop Now</p>
          </div>
          <img
            src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496957/FabFinds%20Frontend/brooke-cagle-Nm70URdtf3c-unsplash_pixraa.jpg"
            alt=""
          />
        </div>
        <div className="individual-image">
          <div className="content-SS">
            <h4>joy with fashion</h4>
            <h2>Kids Wear</h2>
            <p>Shop Now</p>
          </div>
          <img
            src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696599498/FabFinds%20Frontend/courtney-cook-urOLqivlYz8-unsplash_v7zamu.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
