"use client";
import React, { useEffect } from "react";
import "./fifthSection.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";

const FifthSection = ({}) => {
  return (
    <div className="fifth-section-root">
      <div className="fifth-section-content">
        <div className="fifth-section-card">
          <div className="fifth-section-icon">
            <LiaShippingFastSolid />
          </div>
          <div className="card-header">FAST FREE SHIPMENT</div>
          <div className="card-content">
            Passage of Lorem Ipsum, You Need To Be Amet Embarassing
          </div>
        </div>
        <div className="fifth-section-card">
          <div className="fifth-section-icon">
            <BiSupport />
          </div>
          <div className="card-header">24/7 FREE SUPPORT</div>
          <div className="card-content">
            Passage of Lorem Ipsum, You Need To Be Amet Embarassing
          </div>
        </div>
        <div className="fifth-section-card">
          <div className="fifth-section-icon">
            <BsCashStack />
          </div>
          <div className="card-header">SAVE 20% WHEN YOU</div>
          <div className="card-content">
            Passage of Lorem Ipsum, You Need To Be Amet Embarassing
          </div>
        </div>
        <div className="fifth-section-card">
          <div className="fifth-section-icon">
            <CgShoppingBag />
          </div>
          <div className="card-header">100% SATISFACTION</div>
          <div className="card-content">
            Passage of Lorem Ipsum, You Need To Be Amet Embarassing
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
