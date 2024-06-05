"use client";

import "./login.css";
import { AiOutlineClose } from "react-icons/ai";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationBtn";
import { useState, useRef, useEffect } from "react";
import { useLoginMutation } from "@/api/features/auth/authApiSlice";
import { useAppDispatch } from "@/api/hooks";
import Cookies from "js-cookie";
import { setTokens } from "@/api/features/auth/authSlice";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ userType: "user", email, password });

      if ("data" in res) {
        const userData = res.data;
        dispatch(
          setTokens({
            user: userData.user,
          })
        );
      }
      setPassword("");
      setEmail("");
      window.location.reload();
    } catch (error) {
      console.log(error);
      window.alert("login not successful");
    }
  };

  return props.login ? (
    <div className="loginRoot">
      <div className="logincontainer">
        <div className="loginHeader">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setLogin(false);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="title">Welcome back</div>
        <div className="formItem">
          <input
            type="email"
            className="formInput"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="formItem">
          <input
            type="password"
            className="formInput"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="forgotPassword">forgot password?</div>
        <AuthenticationButton
          text="Login"
          status={password !== ""}
          onClick={handleLogin}
        />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
