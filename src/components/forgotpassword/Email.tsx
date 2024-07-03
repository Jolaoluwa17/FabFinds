"use client";
import React, { useEffect, useState } from "react";
import "../../modals/forgotpassword/forgotPassword.css";
import { useForgotPasswordMutation } from "@/api/features/auth/authApiSlice";
import { BiSolidErrorAlt } from "react-icons/bi";

interface EmailProps {
  email: string;
  setEmail: (email: string) => void;
  setActive: (active: string) => void;
}

const Email: React.FC<EmailProps> = ({ email, setEmail, setActive }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setIsButtonActive(validateEmail(email));
  }, [email]);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length > 0;
  };

  const [forgotPassword] = useForgotPasswordMutation();

  const handleForgotPassword = async () => {
    setIsLoading(true);
    const data = {
      email: email,
    };
    try {
      const res = await forgotPassword(data).unwrap();
      setActive("Password");
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.status === 404) {
        setErrMsg("Invalid Email");
      } else {
        setErrMsg("Something went wrong");
      }
    }
  };

  return (
    <div>
      <div className="forgotpassword_title">Forgot Your Password?</div>
      <p className="forgotpassword_subTitle">
        No worries, we'll send you reset instructions
      </p>
      <div className="formItem">
        <input
          type="email"
          className="formInput"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {errMsg !== "" && (
        <p className="error_message">
          <BiSolidErrorAlt style={{ marginRight: "5px" }} fontSize={16} />
          {errMsg}
        </p>
      )}
      <button
        className="reset_btn"
        onClick={handleForgotPassword}
        disabled={!isButtonActive || isLoading}
      >
        {isLoading === false ? (
          "Reset Password"
        ) : (
          <div className="exampleBtn"></div>
        )}
      </button>
    </div>
  );
};

export default Email;
