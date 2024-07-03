"use client";

import React, { useState } from "react";
import "./passwordChecker.css";

interface PasswordStrengthCheckerProps {
  password: string;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({
  password,
}) => {
  const [strength, setStrength] = useState(0);

  const strengthLevels = [
    { text: "Very Weak", color: "#FF0000", width: "0%" },
    { text: "Very Weak", color: "#FF0000", width: "10%" },
    { text: "Weak", color: "#FF0000", width: "30%" },
    { text: "Medium", color: "#FFBF00", width: "50%" },
    { text: "Strong", color: "#059212", width: "70%" },
    { text: "Very Strong", color: "#059212", width: "100%" },
  ];

  const calculateStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  React.useEffect(() => {
    setStrength(calculateStrength(password));
  }, [password]);

  const level = strengthLevels[strength];

  return (
    <div className="password-checker">
      {/* <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      /> */}
      <div className="strength-meter">
        <div
          className="strength-bar"
          style={{
            width: level ? level.width : "100%",
            backgroundColor: level ? level.color : "#059212",
          }}
        ></div>
      </div>
      <div className="strength-text" style={{
            color: level ? level.color : "#059212",
          }}>{level ? level.text : "Very Strong"}</div>
    </div>
  );
};

export default PasswordStrengthChecker;
