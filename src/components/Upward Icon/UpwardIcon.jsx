"use client";
import React, { useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import "../Upward Icon/upwardIcon.css"


const UpwardIcon = () => {
  return (
    <div >
      <div className="icon-cont">
        <div className="upward-icon">
          <IoMdArrowRoundUp />
        </div>
      </div>
    </div>
  );
};

export default UpwardIcon;
