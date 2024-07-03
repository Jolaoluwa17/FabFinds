"use client";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface SuccessProps {}

const PasswordChangeSuccess: React.FC<SuccessProps> = ({}) => {
  return (
    <div className="Password_change_success">
      <BsFillPatchCheckFill fontSize={40} color="#059212" />
      <p className="all_done">All done!</p>
      <p className="success">Your password has been successfully changed</p>
    </div>
  );
};

export default PasswordChangeSuccess;
