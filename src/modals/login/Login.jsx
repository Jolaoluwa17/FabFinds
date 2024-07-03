"use client";

import "./login.css";
import { AiOutlineClose } from "react-icons/ai";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationBtn";
import { useState, useRef, useEffect } from "react";
import {
  useLoginMutation,
  useSendVerifyEmailMutation,
} from "@/api/features/auth/authApiSlice";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { BiSolidErrorAlt } from "react-icons/bi";
import { setCredentials } from "@/api/features/auth/authSlice";
import { useDispatch } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const [sendVerifyEmail] = useSendVerifyEmailMutation();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    dispatch(setCredentials({ email, password }));
    try {
      setIsLoading(true);
      await login({ userType: "user", email, password }).unwrap();
      window.location.reload();
    } catch (error) {
      if (error.data.message === "Incorrect password") {
        setErrorMsg("Wrong email or password");
      } else if (error.data.message === "User not verified") {
        handleSendVerifyEmail();
        props.setLogin(false);
        props.setVerifyAccount(true);
      } else {
        setErrorMsg("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendVerifyEmail = async () => {
    try {
      setIsLoading(true);
      await sendVerifyEmail({ email: email }).unwrap();
    } catch (error) {
      setErrorMsg("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return props.login ? (
    <div className="loginRoot">
      <div className="logincontainer">
        <div className="loginHeader">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setLogin(false);
              setEmail("");
              setPassword("");
              setErrorMsg("");
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="title">Welcome back!</div>
        <p className="subTitle">Your Fashion Journey Continues</p>
        <div className="formItem">
          <input
            type="email"
            className="formInput"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="formItem2" style={{}}>
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
        {errorMsg !== "" && (
          <p className="error_message">
            <BiSolidErrorAlt style={{ marginRight: "5px" }} fontSize={16} />
            {errorMsg}
          </p>
        )}
        <div
          className="forgotPassword"
          onClick={() => [props.setLogin(false), props.setForgotPassword(true)]}
        >
          forgot password?
        </div>
        <AuthenticationButton
          text="Login"
          status={password !== ""}
          onClick={handleLogin}
          isLoading={isLoading}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
