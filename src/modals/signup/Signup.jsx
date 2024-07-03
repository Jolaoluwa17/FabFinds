import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SignupForm from "@/components/Landing Page/signupForm/SignupForm";
import "./signup.css";

function Signup(props) {
  return props.signup ? (
    <div className="signupRoot">
      <div className="signupcontainer">
        <div className="signupHeader">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setSignup(false);
            }}
          >
            <AiOutlineClose />
          </div>
          <div className="title">Join us today</div>
        </div>
        <div className="subTitle">Experience Fashion Like Never Before</div>
        <div>
          <SignupForm
            setVerifyAccount={props.setVerifyAccount}
            setSignup={props.setSignup}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Signup;
