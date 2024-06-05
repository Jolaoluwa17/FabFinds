import React from "react";
import "./authenticationBtn.css";

function AuthenticationButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.status === true ? "#9c27b0" : "grey",
        width: "100%",
        border: "none",
        color: "white",
        cursor: props.status === true ? "pointer" : "not-allowed"
      }}
      className="authenticationBtn"
      disabled={!props.status}
    >
      {props.text}
    </button>
  );
}

export default AuthenticationButton;
