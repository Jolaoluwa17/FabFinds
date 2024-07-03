"use client";
import React, { useState } from "react";
import "./verifyAccount.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "@/api/features/auth/authSlice";
import {
  useLoginMutation,
  useVerifyAccountMutation,
} from "@/api/features/auth/authApiSlice";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationBtn";

interface VerifyAccountProps {
  verifyAccount: boolean;
  setVerifyAccount: (verifyAccount: boolean) => void;
}

const VerifyAccount: React.FC<VerifyAccountProps> = ({
  verifyAccount,
  setVerifyAccount,
}) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const email = useSelector((state: any) => state.auth.email);
  const password = useSelector((state: any) => state.auth.password);

  const [verifyAccountOTP] = useVerifyAccountMutation();
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await login({ userType: "user", email, password }).unwrap();
      window.location.reload();
    } catch (error) {
      if (error.data.message === "Incorrect password") {
        setErrMsg("Wrong email or password");
      } else {
        setErrMsg("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAccount = async () => {
    setIsLoading(true);
    const verifyAccountData = {
      email: email,
      otp: otp,
    };
    try {
      await verifyAccountOTP(verifyAccountData).unwrap();
      setIsLoading(false);
      handleLogin();
      dispatch(clearCredentials());
    } catch (err) {
      if (err.status === 404 || err.data.message === "Invalid OTP") {
        setErrMsg("Invalid OTP");
      } else {
        setErrMsg("Something went wrong");
      }
      setIsLoading(false);
    }
  };

  return verifyAccount ? (
    <div className="verify_account_root">
      <div className="verify_account_container">
        <div className="otp_illustration">
          <img
            src="/images/otp_illustration.jpg"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div className="otp_title">OTP Verification</div>
        <div className="otp_sub_title">
          One-Time Password has been sent to your registered email address
        </div>
        <input
          type="text"
          className="otp_input"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="resend_otp">
          Didn't receive the OTP?{" "}
          <span
            style={{
              color: "#9c27b0",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend OTP
          </span>
        </div>
        <AuthenticationButton
        text="Verify"
        status={otp !== ""}
        onClick={handleVerifyAccount}
        isLoading={isLoading}
      />
      </div>
    </div>
  ) : (
    ""
  );
};

export default VerifyAccount;
