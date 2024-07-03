import React from "react";
import "./authenticationBtn.css";

function AuthenticationButton(props) {
  const { onClick, status, text, isLoading } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: status ? "#9c27b0" : "grey",
        width: "100%",
        border: "none",
        color: "white",
        cursor: status ? "pointer" : "not-allowed",
      }}
      className="authenticationBtn"
      disabled={!status}
    >
      {isLoading === false ? text : <div className="exampleBtn"></div>}
    </button>
  );
}

export default AuthenticationButton;
