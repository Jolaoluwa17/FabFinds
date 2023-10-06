"use client";
import React, { useEffect } from "react";
import "./teamInfo.css";
import { Rating } from "../../Rating Star/RatingStar";

const TeamInfo = ({}) => {
  return (
    <div className="team-info-root">
      <div className="team-info-content">
        <div className="team-info-card">
          <Rating value={4.5} />
          <div className="card-title" style={{ marginTop: "10px" }}>
            100% Recommended
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            culpa. Deserunt voluptatum harum sapiente commodi iusto! Veniam
            aliquid quaerat quas ducimus maxime asperiores deserunt autem, ipsa,
            eum voluptas sequi a!
          </div>
          <div className="card-profile">
            <div className="profile-pic"></div>
            <div className="profile-content">
              <div
                className="name"
                style={{
                  color: "#ab6ce6",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Orando Bloom
              </div>
              <div className="position" style={{ fontSize: "14px" }}>
                Manager, abc company
              </div>
            </div>
          </div>
        </div>
        <div className="team-info-card">
          <Rating value={4.5} />
          <div className="card-title" style={{ marginTop: "10px" }}>
            100% Recommended
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            culpa. Deserunt voluptatum harum sapiente commodi iusto! Veniam
            aliquid quaerat quas ducimus maxime asperiores deserunt autem, ipsa,
            eum voluptas sequi a!
          </div>
          <div className="card-profile">
            <div className="profile-pic"></div>
            <div className="profile-content">
              <div
                className="name"
                style={{
                  color: "#ab6ce6",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                John Doe
              </div>
              <div className="position" style={{ fontSize: "14px" }}>
                CEO, xyz company
              </div>
            </div>
          </div>
        </div>
        <div className="team-info-card">
          <Rating value={4.5} />
          <div className="card-title" style={{ marginTop: "10px" }}>
            100% Recommended
          </div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            culpa. Deserunt voluptatum harum sapiente commodi iusto! Veniam
            aliquid quaerat quas ducimus maxime asperiores deserunt autem, ipsa,
            eum voluptas sequi a!
          </div>
          <div className="card-profile">
            <div className="profile-pic"></div>
            <div className="profile-content">
              <div
                className="name"
                style={{
                  color: "#ab6ce6",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Camp Shiv
              </div>
              <div className="position" style={{ fontSize: "14px" }}>
                Head, abc company
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
