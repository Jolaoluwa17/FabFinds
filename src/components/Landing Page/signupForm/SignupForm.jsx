"use client";

import React, { useState } from "react";
import "./signupForm.css";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationBtn";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useSignUpMutation } from "@/api/features/auth/authApiSlice";

function SignupForm(props) {
  // const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [formData, setFormData] = React.useState({
    userType: "user",
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFirstNameChange = (event) => {
    const firstName = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      name: `${formData.name.split(" ")[0] || ""} ${firstName}`,
    }));
  };

  const handleLastNameChange = (event) => {
    const lastName = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      name: `${lastName} ${formData.name.split(" ")[1] || ""}`,
    }));
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // console.log(formData.password === confirmPassword);
  const [validation, setValidation] = useState(false);
  console.log(validation);
  console.log(formData);
  React.useEffect(() => {
    const isValid =
      formData.password === confirmPassword &&
      formData.email !== "" &&
      formData.name !== "" &&
      formData.password !== "" &&
      formData.phoneNo !== "";
    setValidation(isValid);
  }, [formData, confirmPassword]);

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

  const [signup] = useSignUpMutation();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signup(formData);
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      window.alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signupForm">
      <div className="topRow">
        <div className="formItem">
          <input
            type="text"
            className="formInput"
            placeholder="First name"
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="formItem">
          <input
            type="text"
            className="formInput"
            placeholder="Last name"
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div className="formItem2">
        <input
          type="email"
          className="formInput"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="topRow">
        <div className="countryNo">
          <input type="text" className="formInput" value="+ 234" disabled />
        </div>
        <div className="numberContainer">
          <input
            type="text"
            className="formInput"
            placeholder="PhoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="formItem2"
        style={
          formData.password === confirmPassword
            ? {}
            : { borderColor: "red", borderWidth: "1px", borderStyle: "solid" }
        }
      >
        <input
          type={showPassword ? "text" : "password"}
          className="formInput"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
      <div
        className="formItem2"
        style={
          formData.password === confirmPassword
            ? {}
            : { borderColor: "red", borderWidth: "1px", borderStyle: "solid" }
        }
      >
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
      <div className="tos">
        By selecting{" "}
        <b style={{ color: "black", cursor: "default" }}>Agree and Continue</b>,
        i agree to ReservNow's{" "}
        <b>Terms of Service, Payments Terms of Service</b> and{" "}
        <b>Nondiscrimination Policy</b> and acknowledge the{" "}
        <b>Privacy Policy</b>
      </div>
      <AuthenticationButton
        text="Agree and Continue"
        status={validation}
        onClick={handleSignUp}
      />
    </div>
  );
}

export default SignupForm;
