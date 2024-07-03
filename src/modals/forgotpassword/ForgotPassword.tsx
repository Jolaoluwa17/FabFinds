"use client";

import React, { useState } from "react";
import "./forgotPassword.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Email from "@/components/forgotpassword/Email";
import Password from "@/components/forgotpassword/Password";
import PasswordChangeSuccess from "@/components/forgotpassword/PasswordChangeSuccess";

interface ForgotPasswordProps {
  forgotPassword: boolean;
  setForgotPassword: (forgotPassword: boolean) => void;
  setLogin: any;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  forgotPassword,
  setForgotPassword,
  setLogin,
}) => {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("Email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  return forgotPassword ? (
    <div className="forgotpassword_root">
      <div className="forgotpassword_container">
        {active === "Email" && (
          <Email email={email} setEmail={setEmail} setActive={setActive} />
        )}
        {active === "Password" && (
          <Password
            setActive={setActive}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            otp={otp}
            setOtp={setOtp}
            email={email}
          />
        )}
        {active === "Success" && <PasswordChangeSuccess />}
        <p
          className="back_to_login"
          onClick={() => [
            setLogin(true),
            setForgotPassword(false),
            setActive("Email"),
            setEmail(""),
            setPassword(""),
            setConfirmPassword(""),
            setOtp(""),
          ]}
        >
          <FaArrowLeftLong style={{ marginRight: "8px" }} />
          Back to login
        </p>
        <div className="indicator">
          <div
            className={
              active === "Email" ||
              active === "Password" ||
              active === "Success"
                ? "indicator_active"
                : "individual_indicator"
            }
          >
            1
          </div>
          <div
            className={
              active === "Password" || active === "Success"
                ? "indicator_active"
                : "individual_indicator"
            }
          >
            2
          </div>
          <div
            className={
              active === "Success" ? "indicator_active" : "individual_indicator"
            }
          >
            3
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ForgotPassword;
