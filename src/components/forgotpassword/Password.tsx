"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../modals/forgotpassword/forgotPassword.css";
import PasswordStrengthChecker from "../passwordChecker/PasswordChecker";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/api/features/auth/authApiSlice";
import { BiSolidErrorAlt } from "react-icons/bi";

interface PasswordProps {
  setActive: (active: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  otp: string;
  setOtp: (otp: string) => void;
  email: string;
}

const Password: React.FC<PasswordProps> = ({
  setActive,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  otp,
  setOtp,
  email,
}) => {
  const [otpInputs, setOtpInputs] = useState(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);

      // Move to next input box if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpInputs[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    setOtp(otpInputs.join(""));
  }, [otpInputs]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const isOtpValid = otp.length === 6;
  const isPasswordValid = password.length >= 8;
  const isConfirmPasswordValid = confirmPassword === password;

  const isButtonActive =
    isOtpValid && isPasswordValid && isConfirmPasswordValid;

  const [resetPassword] = useResetPasswordMutation();
  const handleResetPassword = async () => {
    setIsLoading(true);
    const resetPasswordData = {
      email: email,
      otp: otp,
      newPassword: password,
    };
    try {
      const res = await resetPassword(resetPasswordData).unwrap();
      setIsLoading(false);
      setActive("Success");
    } catch (error: any) {
      if (error.status === 404 || error.data.message === "Invalid OTP") {
        setErrMsg("Invalid OTP");
      } else {
        setErrMsg("Something went wrong");
      }
      setIsLoading(false);
    }
  };

  const [forgotPassword] = useForgotPasswordMutation();

  const handleForgotPassword = async () => {
    setIsLoading(true);
    const data = {
      email: email,
    };
    try {
      await forgotPassword(data).unwrap();
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.status === 404) {
        setErrMsg("Invalid Email");
      } else {
        setErrMsg("Something went wrong");
      }
    } finally {
      setDisabled(true);
      setTimer(120);
    }
  };

  const [disabled, setDisabled] = useState(true);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (disabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [disabled]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="forgotpassword_title">Set New Password</div>
      <p className="forgotpassword_subTitle">Must be at least 8 characters</p>
      <div className="otpContainer">
        {otpInputs.map((otpInput, index) => (
          <input
            key={index}
            type="text"
            className="otpInput"
            value={otpInput}
            onChange={(e) => handleOtpChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className="formItem2">
        <input
          type={showPassword ? "text" : "password"}
          className="formInput"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {showPassword ? (
          <IoIosEye
            onClick={togglePasswordVisibility}
            fontSize={20}
            color="grey"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <IoIosEyeOff
            onClick={togglePasswordVisibility}
            fontSize={20}
            color="grey"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <PasswordStrengthChecker password={password} />
      <div className="formItem2">
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="formInput"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {showConfirmPassword ? (
          <IoIosEye
            onClick={toggleConfirmPasswordVisibility}
            fontSize={20}
            color="grey"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <IoIosEyeOff
            onClick={toggleConfirmPasswordVisibility}
            fontSize={20}
            color="grey"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <button
          className="resend_otp"
          onClick={handleForgotPassword}
          disabled={disabled}
        >
          {disabled ? `Resend OTP in ${formatTime(timer)}` : "Resend OTP"}
        </button>
      </div>
      {errMsg !== "" && (
        <p className="error_message">
          <BiSolidErrorAlt style={{ marginRight: "5px" }} fontSize={16} />
          {errMsg}
        </p>
      )}
      <button
        className="reset_btn"
        onClick={handleResetPassword}
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

export default Password;
